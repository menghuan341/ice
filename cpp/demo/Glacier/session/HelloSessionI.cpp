// **********************************************************************
//
// Copyright (c) 2001
// MutableRealms, Inc.
// Huntsville, AL, USA
//
// All Rights Reserved
//
// **********************************************************************

#include <Ice/Ice.h>
#include <HelloSessionI.h>

using namespace std;

HelloSessionManagerI::HelloSessionManagerI(const Ice::ObjectAdapterPtr& adapter) :
    _adapter(adapter)
{
}

Glacier::SessionPrx
HelloSessionManagerI::create(const string& userId, const Ice::Current&)
{
    Glacier::SessionPtr session = new HelloSessionI(userId, this);
    Ice::Identity ident;
    ident.category = userId;
    ident.name = "session";

    _adapter->add(session, ident);
    return Glacier::SessionPrx::uncheckedCast(_adapter->createProxy(ident));
}

void
HelloSessionManagerI::remove(const Ice::Identity& ident)
{
    _adapter->remove(ident);
}

HelloSessionI::HelloSessionI(const string& userId, const HelloSessionManagerIPtr& manager) :
    _userId(userId),
    _manager(manager)
{
}

void
HelloSessionI::destroy(const Ice::Current& current)
{
    _manager->remove(current.identity);
}

void
HelloSessionI::hello(const Ice::Current&)
{
    cout << "Hello " << _userId << endl;
}
