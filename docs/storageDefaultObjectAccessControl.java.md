# `storageDefaultObjectAccessControl` Submodule <a name="`storageDefaultObjectAccessControl` Submodule" id="@cdktf/provider-google.storageDefaultObjectAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDefaultObjectAccessControl <a name="StorageDefaultObjectAccessControl" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control google_storage_default_object_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControl;

StorageDefaultObjectAccessControl.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .entity(java.lang.String)
    .role(java.lang.String)
//  .id(java.lang.String)
//  .object(java.lang.String)
//  .timeouts(StorageDefaultObjectAccessControlTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.entity">entity</a></code> | <code>java.lang.String</code> | The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.object">object</a></code> | <code>java.lang.String</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#bucket StorageDefaultObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.entity"></a>

- *Type:* java.lang.String

The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#entity StorageDefaultObjectAccessControl#entity}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#role StorageDefaultObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.object"></a>

- *Type:* java.lang.String

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#object StorageDefaultObjectAccessControl#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#timeouts StorageDefaultObjectAccessControl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts"></a>

```java
public void putTimeouts(StorageDefaultObjectAccessControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetId"></a>

```java
public void resetId()
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetObject"></a>

```java
public void resetObject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageDefaultObjectAccessControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControl;

StorageDefaultObjectAccessControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControl;

StorageDefaultObjectAccessControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControl;

StorageDefaultObjectAccessControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControl;

StorageDefaultObjectAccessControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageDefaultObjectAccessControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageDefaultObjectAccessControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageDefaultObjectAccessControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageDefaultObjectAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageDefaultObjectAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.projectTeam">projectTeam</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList">StorageDefaultObjectAccessControlProjectTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference">StorageDefaultObjectAccessControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityInput">entityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entity">entity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `projectTeam`<sup>Required</sup> <a name="projectTeam" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.projectTeam"></a>

```java
public StorageDefaultObjectAccessControlProjectTeamList getProjectTeam();
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList">StorageDefaultObjectAccessControlProjectTeamList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeouts"></a>

```java
public StorageDefaultObjectAccessControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference">StorageDefaultObjectAccessControlTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `entityInput`<sup>Optional</sup> <a name="entityInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityInput"></a>

```java
public java.lang.String getEntityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entity"></a>

```java
public java.lang.String getEntity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDefaultObjectAccessControlConfig <a name="StorageDefaultObjectAccessControlConfig" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControlConfig;

StorageDefaultObjectAccessControlConfig.builder()
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
    .bucket(java.lang.String)
    .entity(java.lang.String)
    .role(java.lang.String)
//  .id(java.lang.String)
//  .object(java.lang.String)
//  .timeouts(StorageDefaultObjectAccessControlTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.entity">entity</a></code> | <code>java.lang.String</code> | The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.role">role</a></code> | <code>java.lang.String</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.object">object</a></code> | <code>java.lang.String</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#bucket StorageDefaultObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.entity"></a>

```java
public java.lang.String getEntity();
```

- *Type:* java.lang.String

The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#entity StorageDefaultObjectAccessControl#entity}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#role StorageDefaultObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#object StorageDefaultObjectAccessControl#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.timeouts"></a>

```java
public StorageDefaultObjectAccessControlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#timeouts StorageDefaultObjectAccessControl#timeouts}

---

### StorageDefaultObjectAccessControlProjectTeam <a name="StorageDefaultObjectAccessControlProjectTeam" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControlProjectTeam;

StorageDefaultObjectAccessControlProjectTeam.builder()
    .build();
```


### StorageDefaultObjectAccessControlTimeouts <a name="StorageDefaultObjectAccessControlTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControlTimeouts;

StorageDefaultObjectAccessControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#create StorageDefaultObjectAccessControl#create}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#delete StorageDefaultObjectAccessControl#delete}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#update StorageDefaultObjectAccessControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#create StorageDefaultObjectAccessControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#delete StorageDefaultObjectAccessControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/storage_default_object_access_control#update StorageDefaultObjectAccessControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDefaultObjectAccessControlProjectTeamList <a name="StorageDefaultObjectAccessControlProjectTeamList" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControlProjectTeamList;

new StorageDefaultObjectAccessControlProjectTeamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get"></a>

```java
public StorageDefaultObjectAccessControlProjectTeamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StorageDefaultObjectAccessControlProjectTeamOutputReference <a name="StorageDefaultObjectAccessControlProjectTeamOutputReference" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControlProjectTeamOutputReference;

new StorageDefaultObjectAccessControlProjectTeamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.team">team</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam">StorageDefaultObjectAccessControlProjectTeam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue"></a>

```java
public StorageDefaultObjectAccessControlProjectTeam getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam">StorageDefaultObjectAccessControlProjectTeam</a>

---


### StorageDefaultObjectAccessControlTimeoutsOutputReference <a name="StorageDefaultObjectAccessControlTimeoutsOutputReference" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_default_object_access_control.StorageDefaultObjectAccessControlTimeoutsOutputReference;

new StorageDefaultObjectAccessControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

---



