# `dataGoogleComputeStoragePoolTypes` Submodule <a name="`dataGoogleComputeStoragePoolTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeStoragePoolTypes <a name="DataGoogleComputeStoragePoolTypes" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types google_compute_storage_pool_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypes;

DataGoogleComputeStoragePoolTypes.Builder.create(Construct scope, java.lang.String id)
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
    .storagePoolType(java.lang.String)
    .zone(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | Name of the storage pool type. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.storagePoolType"></a>

- *Type:* java.lang.String

Name of the storage pool type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#storage_pool_type DataGoogleComputeStoragePoolTypes#storage_pool_type}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#zone DataGoogleComputeStoragePoolTypes#zone}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypes;

DataGoogleComputeStoragePoolTypes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypes;

DataGoogleComputeStoragePoolTypes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypes;

DataGoogleComputeStoragePoolTypes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypes;

DataGoogleComputeStoragePoolTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeStoragePoolTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeStoragePoolTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeStoragePoolTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeStoragePoolTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated">deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb">maxPoolProvisionedCapacityGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops">maxPoolProvisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput">maxPoolProvisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb">minPoolProvisionedCapacityGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops">minPoolProvisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput">minPoolProvisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId">selfLinkWithId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes">supportedDiskTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput">storagePoolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated"></a>

```java
public DataGoogleComputeStoragePoolTypesDeprecatedList getDeprecated();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `maxPoolProvisionedCapacityGb`<sup>Required</sup> <a name="maxPoolProvisionedCapacityGb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb"></a>

```java
public java.lang.Number getMaxPoolProvisionedCapacityGb();
```

- *Type:* java.lang.Number

---

##### `maxPoolProvisionedIops`<sup>Required</sup> <a name="maxPoolProvisionedIops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops"></a>

```java
public java.lang.Number getMaxPoolProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `maxPoolProvisionedThroughput`<sup>Required</sup> <a name="maxPoolProvisionedThroughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput"></a>

```java
public java.lang.Number getMaxPoolProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `minPoolProvisionedCapacityGb`<sup>Required</sup> <a name="minPoolProvisionedCapacityGb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb"></a>

```java
public java.lang.Number getMinPoolProvisionedCapacityGb();
```

- *Type:* java.lang.Number

---

##### `minPoolProvisionedIops`<sup>Required</sup> <a name="minPoolProvisionedIops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops"></a>

```java
public java.lang.Number getMinPoolProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `minPoolProvisionedThroughput`<sup>Required</sup> <a name="minPoolProvisionedThroughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput"></a>

```java
public java.lang.Number getMinPoolProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId"></a>

```java
public java.lang.String getSelfLinkWithId();
```

- *Type:* java.lang.String

---

##### `supportedDiskTypes`<sup>Required</sup> <a name="supportedDiskTypes" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedDiskTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storagePoolTypeInput`<sup>Optional</sup> <a name="storagePoolTypeInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput"></a>

```java
public java.lang.String getStoragePoolTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType"></a>

```java
public java.lang.String getStoragePoolType();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeStoragePoolTypesConfig <a name="DataGoogleComputeStoragePoolTypesConfig" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypesConfig;

DataGoogleComputeStoragePoolTypesConfig.builder()
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
    .storagePoolType(java.lang.String)
    .zone(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | Name of the storage pool type. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType"></a>

```java
public java.lang.String getStoragePoolType();
```

- *Type:* java.lang.String

Name of the storage pool type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#storage_pool_type DataGoogleComputeStoragePoolTypes#storage_pool_type}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#zone DataGoogleComputeStoragePoolTypes#zone}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}.

---

### DataGoogleComputeStoragePoolTypesDeprecated <a name="DataGoogleComputeStoragePoolTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypesDeprecated;

DataGoogleComputeStoragePoolTypesDeprecated.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeStoragePoolTypesDeprecatedList <a name="DataGoogleComputeStoragePoolTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypesDeprecatedList;

new DataGoogleComputeStoragePoolTypesDeprecatedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get"></a>

```java
public DataGoogleComputeStoragePoolTypesDeprecatedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeStoragePoolTypesDeprecatedOutputReference <a name="DataGoogleComputeStoragePoolTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_storage_pool_types.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference;

new DataGoogleComputeStoragePoolTypesDeprecatedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted">deleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated">deprecated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete">obsolete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement">replacement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted"></a>

```java
public java.lang.String getDeleted();
```

- *Type:* java.lang.String

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated"></a>

```java
public java.lang.String getDeprecated();
```

- *Type:* java.lang.String

---

##### `obsolete`<sup>Required</sup> <a name="obsolete" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete"></a>

```java
public java.lang.String getObsolete();
```

- *Type:* java.lang.String

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement"></a>

```java
public java.lang.String getReplacement();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeStoragePoolTypesDeprecated getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a>

---



