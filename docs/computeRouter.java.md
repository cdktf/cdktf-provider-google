# `computeRouter` Submodule <a name="`computeRouter` Submodule" id="@cdktf/provider-google.computeRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouter <a name="ComputeRouter" id="@cdktf/provider-google.computeRouter.ComputeRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router google_compute_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouter;

ComputeRouter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
//  .bgp(ComputeRouterBgp)
//  .description(java.lang.String)
//  .encryptedInterconnectRouter(java.lang.Boolean)
//  .encryptedInterconnectRouter(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRouterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | A reference to the network to which this router belongs. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.encryptedInterconnectRouter">encryptedInterconnectRouter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments). |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#id ComputeRouter#id}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#project ComputeRouter#project}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the router resides. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#name ComputeRouter#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.network"></a>

- *Type:* java.lang.String

A reference to the network to which this router belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#network ComputeRouter#network}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.bgp"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#bgp ComputeRouter#bgp}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#description ComputeRouter#description}

---

##### `encryptedInterconnectRouter`<sup>Optional</sup> <a name="encryptedInterconnectRouter" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.encryptedInterconnectRouter"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#encrypted_interconnect_router ComputeRouter#encrypted_interconnect_router}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#id ComputeRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#project ComputeRouter#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the router resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#region ComputeRouter#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#timeouts ComputeRouter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.putBgp">putBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetBgp">resetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetEncryptedInterconnectRouter">resetEncryptedInterconnectRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouter.ComputeRouter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRouter.ComputeRouter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouter.ComputeRouter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRouter.ComputeRouter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouter.ComputeRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRouter.ComputeRouter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRouter.ComputeRouter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRouter.ComputeRouter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRouter.ComputeRouter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouter.ComputeRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRouter.ComputeRouter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRouter.ComputeRouter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouter.ComputeRouter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRouter.ComputeRouter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRouter.ComputeRouter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouter.ComputeRouter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRouter.ComputeRouter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRouter.ComputeRouter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgp` <a name="putBgp" id="@cdktf/provider-google.computeRouter.ComputeRouter.putBgp"></a>

```java
public void putBgp(ComputeRouterBgp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouter.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRouter.ComputeRouter.putTimeouts"></a>

```java
public void putTimeouts(ComputeRouterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a>

---

##### `resetBgp` <a name="resetBgp" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetBgp"></a>

```java
public void resetBgp()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptedInterconnectRouter` <a name="resetEncryptedInterconnectRouter" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetEncryptedInterconnectRouter"></a>

```java
public void resetEncryptedInterconnectRouter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRouter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRouter.ComputeRouter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouter;

ComputeRouter.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouter.ComputeRouter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouter;

ComputeRouter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouter;

ComputeRouter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRouter.ComputeRouter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouter;

ComputeRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeRouter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouter.ComputeRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRouter.ComputeRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRouter.ComputeRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouter.ComputeRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference">ComputeRouterBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference">ComputeRouterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.bgpInput">bgpInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouterInput">encryptedInterconnectRouterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouter">encryptedInterconnectRouter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.bgp"></a>

```java
public ComputeRouterBgpOutputReference getBgp();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference">ComputeRouterBgpOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.timeouts"></a>

```java
public ComputeRouterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference">ComputeRouterTimeoutsOutputReference</a>

---

##### `bgpInput`<sup>Optional</sup> <a name="bgpInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.bgpInput"></a>

```java
public ComputeRouterBgp getBgpInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptedInterconnectRouterInput`<sup>Optional</sup> <a name="encryptedInterconnectRouterInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouterInput"></a>

```java
public java.lang.Object getEncryptedInterconnectRouterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encryptedInterconnectRouter`<sup>Required</sup> <a name="encryptedInterconnectRouter" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouter"></a>

```java
public java.lang.Object getEncryptedInterconnectRouter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterBgp <a name="ComputeRouterBgp" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterBgp;

ComputeRouterBgp.builder()
    .asn(java.lang.Number)
//  .advertisedGroups(java.util.List<java.lang.String>)
//  .advertisedIpRanges(IResolvable)
//  .advertisedIpRanges(java.util.List<ComputeRouterBgpAdvertisedIpRanges>)
//  .advertiseMode(java.lang.String)
//  .keepaliveInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.asn">asn</a></code> | <code>java.lang.Number</code> | Local BGP Autonomous System Number (ASN). |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedGroups">advertisedGroups</a></code> | <code>java.util.List<java.lang.String></code> | User-specified list of prefix groups to advertise in custom mode. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>></code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertiseMode">advertiseMode</a></code> | <code>java.lang.String</code> | User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.keepaliveInterval">keepaliveInterval</a></code> | <code>java.lang.Number</code> | The interval in seconds between BGP keepalive messages that are sent to the peer. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

Local BGP Autonomous System Number (ASN).

Must be an RFC6996
private ASN, either 16-bit or 32-bit. The value will be fixed for
this router resource. All VPN tunnels that link to this router
will have the same local ASN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#asn ComputeRouter#asn}

---

##### `advertisedGroups`<sup>Optional</sup> <a name="advertisedGroups" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedGroups"></a>

```java
public java.util.List<java.lang.String> getAdvertisedGroups();
```

- *Type:* java.util.List<java.lang.String>

User-specified list of prefix groups to advertise in custom mode.

This field can only be populated if advertiseMode is CUSTOM and
is advertised to all peers of the router. These groups will be
advertised in addition to any specified prefixes. Leave this field
blank to advertise no custom groups.

This enum field has the one valid value: ALL_SUBNETS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#advertised_groups ComputeRouter#advertised_groups}

---

##### `advertisedIpRanges`<sup>Optional</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedIpRanges"></a>

```java
public java.lang.Object getAdvertisedIpRanges();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>>

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#advertised_ip_ranges ComputeRouter#advertised_ip_ranges}

---

##### `advertiseMode`<sup>Optional</sup> <a name="advertiseMode" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertiseMode"></a>

```java
public java.lang.String getAdvertiseMode();
```

- *Type:* java.lang.String

User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#advertise_mode ComputeRouter#advertise_mode}

---

##### `keepaliveInterval`<sup>Optional</sup> <a name="keepaliveInterval" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.keepaliveInterval"></a>

```java
public java.lang.Number getKeepaliveInterval();
```

- *Type:* java.lang.Number

The interval in seconds between BGP keepalive messages that are sent to the peer.

Hold time is three times the interval at which keepalive
messages are sent, and the hold time is the maximum number of seconds
allowed to elapse between successive keepalive messages that BGP
receives from a peer.

BGP will use the smaller of either the local hold time value or the
peer's hold time value as the hold time for the BGP connection
between the two peers. If set, this value must be between 20 and 60.
The default is 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#keepalive_interval ComputeRouter#keepalive_interval}

---

### ComputeRouterBgpAdvertisedIpRanges <a name="ComputeRouterBgpAdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterBgpAdvertisedIpRanges;

ComputeRouterBgpAdvertisedIpRanges.builder()
    .range(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.range">range</a></code> | <code>java.lang.String</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.description">description</a></code> | <code>java.lang.String</code> | User-specified description for the IP range. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.range"></a>

```java
public java.lang.String getRange();
```

- *Type:* java.lang.String

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#range ComputeRouter#range}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#description ComputeRouter#description}

---

### ComputeRouterConfig <a name="ComputeRouterConfig" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterConfig;

ComputeRouterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
//  .bgp(ComputeRouterBgp)
//  .description(java.lang.String)
//  .encryptedInterconnectRouter(java.lang.Boolean)
//  .encryptedInterconnectRouter(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRouterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.network">network</a></code> | <code>java.lang.String</code> | A reference to the network to which this router belongs. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.encryptedInterconnectRouter">encryptedInterconnectRouter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments). |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#id ComputeRouter#id}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#project ComputeRouter#project}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the router resides. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#name ComputeRouter#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

A reference to the network to which this router belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#network ComputeRouter#network}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.bgp"></a>

```java
public ComputeRouterBgp getBgp();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#bgp ComputeRouter#bgp}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#description ComputeRouter#description}

---

##### `encryptedInterconnectRouter`<sup>Optional</sup> <a name="encryptedInterconnectRouter" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.encryptedInterconnectRouter"></a>

```java
public java.lang.Object getEncryptedInterconnectRouter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#encrypted_interconnect_router ComputeRouter#encrypted_interconnect_router}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#id ComputeRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#project ComputeRouter#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the router resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#region ComputeRouter#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.timeouts"></a>

```java
public ComputeRouterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#timeouts ComputeRouter#timeouts}

---

### ComputeRouterTimeouts <a name="ComputeRouterTimeouts" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterTimeouts;

ComputeRouterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#create ComputeRouter#create}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#delete ComputeRouter#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#update ComputeRouter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#create ComputeRouter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#delete ComputeRouter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_router#update ComputeRouter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterBgpAdvertisedIpRangesList <a name="ComputeRouterBgpAdvertisedIpRangesList" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterBgpAdvertisedIpRangesList;

new ComputeRouterBgpAdvertisedIpRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.get"></a>

```java
public ComputeRouterBgpAdvertisedIpRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>>

---


### ComputeRouterBgpAdvertisedIpRangesOutputReference <a name="ComputeRouterBgpAdvertisedIpRangesOutputReference" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterBgpAdvertisedIpRangesOutputReference;

new ComputeRouterBgpAdvertisedIpRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.rangeInput">rangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.range">range</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```java
public java.lang.String getRangeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.range"></a>

```java
public java.lang.String getRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>

---


### ComputeRouterBgpOutputReference <a name="ComputeRouterBgpOutputReference" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterBgpOutputReference;

new ComputeRouterBgpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.putAdvertisedIpRanges">putAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedGroups">resetAdvertisedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedIpRanges">resetAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertiseMode">resetAdvertiseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetKeepaliveInterval">resetKeepaliveInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvertisedIpRanges` <a name="putAdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.putAdvertisedIpRanges"></a>

```java
public void putAdvertisedIpRanges(IResolvable OR java.util.List<ComputeRouterBgpAdvertisedIpRanges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>>

---

##### `resetAdvertisedGroups` <a name="resetAdvertisedGroups" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedGroups"></a>

```java
public void resetAdvertisedGroups()
```

##### `resetAdvertisedIpRanges` <a name="resetAdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedIpRanges"></a>

```java
public void resetAdvertisedIpRanges()
```

##### `resetAdvertiseMode` <a name="resetAdvertiseMode" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertiseMode"></a>

```java
public void resetAdvertiseMode()
```

##### `resetKeepaliveInterval` <a name="resetKeepaliveInterval" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetKeepaliveInterval"></a>

```java
public void resetKeepaliveInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList">ComputeRouterBgpAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroupsInput">advertisedGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRangesInput">advertisedIpRangesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseModeInput">advertiseModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asnInput">asnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveIntervalInput">keepaliveIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroups">advertisedGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseMode">advertiseMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveInterval">keepaliveInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advertisedIpRanges`<sup>Required</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRanges"></a>

```java
public ComputeRouterBgpAdvertisedIpRangesList getAdvertisedIpRanges();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList">ComputeRouterBgpAdvertisedIpRangesList</a>

---

##### `advertisedGroupsInput`<sup>Optional</sup> <a name="advertisedGroupsInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroupsInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertisedIpRangesInput`<sup>Optional</sup> <a name="advertisedIpRangesInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRangesInput"></a>

```java
public java.lang.Object getAdvertisedIpRangesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges">ComputeRouterBgpAdvertisedIpRanges</a>>

---

##### `advertiseModeInput`<sup>Optional</sup> <a name="advertiseModeInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseModeInput"></a>

```java
public java.lang.String getAdvertiseModeInput();
```

- *Type:* java.lang.String

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asnInput"></a>

```java
public java.lang.Number getAsnInput();
```

- *Type:* java.lang.Number

---

##### `keepaliveIntervalInput`<sup>Optional</sup> <a name="keepaliveIntervalInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveIntervalInput"></a>

```java
public java.lang.Number getKeepaliveIntervalInput();
```

- *Type:* java.lang.Number

---

##### `advertisedGroups`<sup>Required</sup> <a name="advertisedGroups" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroups"></a>

```java
public java.util.List<java.lang.String> getAdvertisedGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertiseMode`<sup>Required</sup> <a name="advertiseMode" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseMode"></a>

```java
public java.lang.String getAdvertiseMode();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `keepaliveInterval`<sup>Required</sup> <a name="keepaliveInterval" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveInterval"></a>

```java
public java.lang.Number getKeepaliveInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.internalValue"></a>

```java
public ComputeRouterBgp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

---


### ComputeRouterTimeoutsOutputReference <a name="ComputeRouterTimeoutsOutputReference" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router.ComputeRouterTimeoutsOutputReference;

new ComputeRouterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a>

---



