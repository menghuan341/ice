// **********************************************************************
//
// Copyright (c) 2001
// MutableRealms, Inc.
// Huntsville, AL, USA
//
// All Rights Reserved
//
// **********************************************************************

#include <Ice/RoutingTable.h>
#include <Glacier/RouterI.h>
#include <Glacier/Session.h>
#include <Glacier/SessionManager.h>
#include <iostream>

using namespace std;
using namespace Ice;
using namespace Glacier;

Glacier::RouterI::RouterI(const ObjectAdapterPtr& clientAdapter,
			  const ObjectAdapterPtr& serverAdapter,
			  const ::IceInternal::RoutingTablePtr& routingTable,
			  const SessionManagerPrx& sessionManager,
			  const string& userId) :
    _clientAdapter(clientAdapter),
    _serverAdapter(serverAdapter),
    _logger(_clientAdapter->getCommunicator()->getLogger()),
    _routingTable(routingTable),
    _sessionManager(sessionManager),
    _userId(userId)
{
    PropertiesPtr properties = _clientAdapter->getCommunicator()->getProperties();
    _routingTableTraceLevel = properties->getPropertyAsInt("Glacier.Router.Trace.RoutingTable");
}

Glacier::RouterI::~RouterI()
{
    assert(!_clientAdapter);
    assert(_sessions.empty());
}

void
Glacier::RouterI::destroy()
{
    //
    // No mutex protection necessary, destroy is only called after all
    // object adapters have shut down.
    //
    _clientAdapter = 0;
    _serverAdapter = 0;
    _logger = 0;
    _routingTable = 0;
    for (vector<SessionPrx>::const_iterator p = _sessions.begin(); p != _sessions.end(); ++p)
    {
	(*p)->destroy();
    }
    _sessions.clear();
}

ObjectPrx
Glacier::RouterI::getClientProxy(const Current&)
{
    assert(_clientAdapter); // Destroyed?

    return _clientAdapter->createProxy(stringToIdentity("dummy"));
}

ObjectPrx
Glacier::RouterI::getServerProxy(const Current&)
{
    assert(_clientAdapter); // Destroyed?

    if (_serverAdapter)
    {
	return _serverAdapter->createProxy(stringToIdentity("dummy"));
    }
    else
    {
	return 0;
    }
}

void
Glacier::RouterI::addProxy(const ObjectPrx& proxy, const Current&)
{
    assert(_clientAdapter); // Destroyed?

    if (_routingTableTraceLevel)
    {
	Trace out(_logger, "Glacier");
	out << "adding proxy to routing table:\n" << _clientAdapter->getCommunicator()->proxyToString(proxy);
    }

    _routingTable->add(proxy);
}

void
Glacier::RouterI::shutdown(const Current&)
{
    assert(_routingTable);
    _clientAdapter->getCommunicator()->shutdown();
}

SessionPrx
Glacier::RouterI::createSession(const Current&)
{
    IceUtil::Mutex::Lock lock(_sessionMutex);
    if (!_sessionManager)
    {
	throw NoSessionManagerException();
    }

    SessionPrx session = _sessionManager->create(_userId); 
    _sessions.push_back(session);

    return session;
}

