# `osLoginSshPublicKey` Submodule <a name="`osLoginSshPublicKey` Submodule" id="@cdktf/provider-google.osLoginSshPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsLoginSshPublicKey <a name="OsLoginSshPublicKey" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key google_os_login_ssh_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKey;

OsLoginSshPublicKey.Builder.create(Construct scope, java.lang.String id)
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
    .key(java.lang.String)
    .user(java.lang.String)
//  .expirationTimeUsec(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(OsLoginSshPublicKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | The user email. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.expirationTimeUsec">expirationTimeUsec</a></code> | <code>java.lang.String</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#key OsLoginSshPublicKey#key}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.user"></a>

- *Type:* java.lang.String

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#user OsLoginSshPublicKey#user}

---

##### `expirationTimeUsec`<sup>Optional</sup> <a name="expirationTimeUsec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.expirationTimeUsec"></a>

- *Type:* java.lang.String

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#expiration_time_usec OsLoginSshPublicKey#expiration_time_usec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#project OsLoginSshPublicKey#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#timeouts OsLoginSshPublicKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec">resetExpirationTimeUsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts"></a>

```java
public void putTimeouts(OsLoginSshPublicKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

---

##### `resetExpirationTimeUsec` <a name="resetExpirationTimeUsec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec"></a>

```java
public void resetExpirationTimeUsec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsLoginSshPublicKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKey;

OsLoginSshPublicKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKey;

OsLoginSshPublicKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKey;

OsLoginSshPublicKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKey;

OsLoginSshPublicKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsLoginSshPublicKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsLoginSshPublicKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsLoginSshPublicKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsLoginSshPublicKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsLoginSshPublicKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput">expirationTimeUsecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts"></a>

```java
public OsLoginSshPublicKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a>

---

##### `expirationTimeUsecInput`<sup>Optional</sup> <a name="expirationTimeUsecInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput"></a>

```java
public java.lang.String getExpirationTimeUsecInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `expirationTimeUsec`<sup>Required</sup> <a name="expirationTimeUsec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec"></a>

```java
public java.lang.String getExpirationTimeUsec();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsLoginSshPublicKeyConfig <a name="OsLoginSshPublicKeyConfig" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKeyConfig;

OsLoginSshPublicKeyConfig.builder()
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
    .key(java.lang.String)
    .user(java.lang.String)
//  .expirationTimeUsec(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(OsLoginSshPublicKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key">key</a></code> | <code>java.lang.String</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user">user</a></code> | <code>java.lang.String</code> | The user email. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>java.lang.String</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#key OsLoginSshPublicKey#key}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#user OsLoginSshPublicKey#user}

---

##### `expirationTimeUsec`<sup>Optional</sup> <a name="expirationTimeUsec" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec"></a>

```java
public java.lang.String getExpirationTimeUsec();
```

- *Type:* java.lang.String

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#expiration_time_usec OsLoginSshPublicKey#expiration_time_usec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#project OsLoginSshPublicKey#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts"></a>

```java
public OsLoginSshPublicKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#timeouts OsLoginSshPublicKey#timeouts}

---

### OsLoginSshPublicKeyTimeouts <a name="OsLoginSshPublicKeyTimeouts" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKeyTimeouts;

OsLoginSshPublicKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#create OsLoginSshPublicKey#create}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#update OsLoginSshPublicKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#create OsLoginSshPublicKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/os_login_ssh_public_key#update OsLoginSshPublicKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsLoginSshPublicKeyTimeoutsOutputReference <a name="OsLoginSshPublicKeyTimeoutsOutputReference" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.os_login_ssh_public_key.OsLoginSshPublicKeyTimeoutsOutputReference;

new OsLoginSshPublicKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

---



