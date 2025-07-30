# `dataGoogleAlloydbInstance` Submodule <a name="`dataGoogleAlloydbInstance` Submodule" id="@cdktf/provider-google.dataGoogleAlloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAlloydbInstance <a name="DataGoogleAlloydbInstance" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstance;

DataGoogleAlloydbInstance.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .instanceId(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The canonical ID for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Project ID of the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#cluster_id DataGoogleAlloydbInstance#cluster_id}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#instance_id DataGoogleAlloydbInstance#instance_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The canonical ID for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#location DataGoogleAlloydbInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#project DataGoogleAlloydbInstance#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleAlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstance;

DataGoogleAlloydbInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstance;

DataGoogleAlloydbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstance;

DataGoogleAlloydbInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstance;

DataGoogleAlloydbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleAlloydbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleAlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleAlloydbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleAlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleAlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.activationPolicy">activationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.annotations">annotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.availabilityType">availabilityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList">DataGoogleAlloydbInstanceClientConnectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.databaseFlags">databaseFlags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.gceZone">gceZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList">DataGoogleAlloydbInstanceMachineConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList">DataGoogleAlloydbInstanceNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.outboundPublicIpAddresses">outboundPublicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.pscInstanceConfig">pscInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList">DataGoogleAlloydbInstancePscInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList">DataGoogleAlloydbInstanceQueryInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList">DataGoogleAlloydbInstanceReadPoolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `activationPolicy`<sup>Required</sup> <a name="activationPolicy" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.activationPolicy"></a>

```java
public java.lang.String getActivationPolicy();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.availabilityType"></a>

```java
public java.lang.String getAvailabilityType();
```

- *Type:* java.lang.String

---

##### `clientConnectionConfig`<sup>Required</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clientConnectionConfig"></a>

```java
public DataGoogleAlloydbInstanceClientConnectionConfigList getClientConnectionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList">DataGoogleAlloydbInstanceClientConnectionConfigList</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.databaseFlags"></a>

```java
public StringMap getDatabaseFlags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `gceZone`<sup>Required</sup> <a name="gceZone" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.gceZone"></a>

```java
public java.lang.String getGceZone();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `machineConfig`<sup>Required</sup> <a name="machineConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.machineConfig"></a>

```java
public DataGoogleAlloydbInstanceMachineConfigList getMachineConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList">DataGoogleAlloydbInstanceMachineConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.networkConfig"></a>

```java
public DataGoogleAlloydbInstanceNetworkConfigList getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList">DataGoogleAlloydbInstanceNetworkConfigList</a>

---

##### `outboundPublicIpAddresses`<sup>Required</sup> <a name="outboundPublicIpAddresses" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.outboundPublicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getOutboundPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pscInstanceConfig`<sup>Required</sup> <a name="pscInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.pscInstanceConfig"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigList getPscInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList">DataGoogleAlloydbInstancePscInstanceConfigList</a>

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `queryInsightsConfig`<sup>Required</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.queryInsightsConfig"></a>

```java
public DataGoogleAlloydbInstanceQueryInsightsConfigList getQueryInsightsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList">DataGoogleAlloydbInstanceQueryInsightsConfigList</a>

---

##### `readPoolConfig`<sup>Required</sup> <a name="readPoolConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.readPoolConfig"></a>

```java
public DataGoogleAlloydbInstanceReadPoolConfigList getReadPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList">DataGoogleAlloydbInstanceReadPoolConfigList</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAlloydbInstanceClientConnectionConfig <a name="DataGoogleAlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceClientConnectionConfig;

DataGoogleAlloydbInstanceClientConnectionConfig.builder()
    .build();
```


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfig <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig;

DataGoogleAlloydbInstanceClientConnectionConfigSslConfig.builder()
    .build();
```


### DataGoogleAlloydbInstanceConfig <a name="DataGoogleAlloydbInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceConfig;

DataGoogleAlloydbInstanceConfig.builder()
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
    .clusterId(java.lang.String)
    .instanceId(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The canonical ID for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Project ID of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#cluster_id DataGoogleAlloydbInstance#cluster_id}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#instance_id DataGoogleAlloydbInstance#instance_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The canonical ID for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#location DataGoogleAlloydbInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#project DataGoogleAlloydbInstance#project}

---

### DataGoogleAlloydbInstanceMachineConfig <a name="DataGoogleAlloydbInstanceMachineConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceMachineConfig;

DataGoogleAlloydbInstanceMachineConfig.builder()
    .build();
```


### DataGoogleAlloydbInstanceNetworkConfig <a name="DataGoogleAlloydbInstanceNetworkConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceNetworkConfig;

DataGoogleAlloydbInstanceNetworkConfig.builder()
    .build();
```


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks;

DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.builder()
    .build();
```


### DataGoogleAlloydbInstancePscInstanceConfig <a name="DataGoogleAlloydbInstancePscInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfig;

DataGoogleAlloydbInstancePscInstanceConfig.builder()
    .build();
```


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections;

DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections.builder()
    .build();
```


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs;

DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs.builder()
    .build();
```


### DataGoogleAlloydbInstanceQueryInsightsConfig <a name="DataGoogleAlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceQueryInsightsConfig;

DataGoogleAlloydbInstanceQueryInsightsConfig.builder()
    .build();
```


### DataGoogleAlloydbInstanceReadPoolConfig <a name="DataGoogleAlloydbInstanceReadPoolConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceReadPoolConfig;

DataGoogleAlloydbInstanceReadPoolConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAlloydbInstanceClientConnectionConfigList <a name="DataGoogleAlloydbInstanceClientConnectionConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceClientConnectionConfigList;

new DataGoogleAlloydbInstanceClientConnectionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get"></a>

```java
public DataGoogleAlloydbInstanceClientConnectionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstanceClientConnectionConfigOutputReference <a name="DataGoogleAlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference;

new DataGoogleAlloydbInstanceClientConnectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">requireConnectors</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList">DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig">DataGoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requireConnectors`<sup>Required</sup> <a name="requireConnectors" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```java
public IResolvable getRequireConnectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```java
public DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList getSslConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList">DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstanceClientConnectionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig">DataGoogleAlloydbInstanceClientConnectionConfig</a>

---


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList;

new DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get"></a>

```java
public DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference;

new DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig">DataGoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstanceClientConnectionConfigSslConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig">DataGoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---


### DataGoogleAlloydbInstanceMachineConfigList <a name="DataGoogleAlloydbInstanceMachineConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceMachineConfigList;

new DataGoogleAlloydbInstanceMachineConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get"></a>

```java
public DataGoogleAlloydbInstanceMachineConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstanceMachineConfigOutputReference <a name="DataGoogleAlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceMachineConfigOutputReference;

new DataGoogleAlloydbInstanceMachineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig">DataGoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstanceMachineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig">DataGoogleAlloydbInstanceMachineConfig</a>

---


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList;

new DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get"></a>

```java
public DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference;

new DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>

---


### DataGoogleAlloydbInstanceNetworkConfigList <a name="DataGoogleAlloydbInstanceNetworkConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceNetworkConfigList;

new DataGoogleAlloydbInstanceNetworkConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get"></a>

```java
public DataGoogleAlloydbInstanceNetworkConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstanceNetworkConfigOutputReference <a name="DataGoogleAlloydbInstanceNetworkConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceNetworkConfigOutputReference;

new DataGoogleAlloydbInstanceNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverride">allocatedIpRangeOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks">authorizedExternalNetworks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp">enableOutboundPublicIp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp">enablePublicIp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig">DataGoogleAlloydbInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedIpRangeOverride`<sup>Required</sup> <a name="allocatedIpRangeOverride" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverride"></a>

```java
public java.lang.String getAllocatedIpRangeOverride();
```

- *Type:* java.lang.String

---

##### `authorizedExternalNetworks`<sup>Required</sup> <a name="authorizedExternalNetworks" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks"></a>

```java
public DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList getAuthorizedExternalNetworks();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a>

---

##### `enableOutboundPublicIp`<sup>Required</sup> <a name="enableOutboundPublicIp" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp"></a>

```java
public IResolvable getEnableOutboundPublicIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enablePublicIp`<sup>Required</sup> <a name="enablePublicIp" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp"></a>

```java
public IResolvable getEnablePublicIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstanceNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig">DataGoogleAlloydbInstanceNetworkConfig</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigList <a name="DataGoogleAlloydbInstancePscInstanceConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigList;

new DataGoogleAlloydbInstancePscInstanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstancePscInstanceConfigOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference;

new DataGoogleAlloydbInstancePscInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections">pscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName">pscDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs">pscInterfaceConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink">serviceAttachmentLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig">DataGoogleAlloydbInstancePscInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedConsumerProjects`<sup>Required</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pscAutoConnections`<sup>Required</sup> <a name="pscAutoConnections" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList getPscAutoConnections();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList</a>

---

##### `pscDnsName`<sup>Required</sup> <a name="pscDnsName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName"></a>

```java
public java.lang.String getPscDnsName();
```

- *Type:* java.lang.String

---

##### `pscInterfaceConfigs`<sup>Required</sup> <a name="pscInterfaceConfigs" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList getPscInterfaceConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a>

---

##### `serviceAttachmentLink`<sup>Required</sup> <a name="serviceAttachmentLink" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink"></a>

```java
public java.lang.String getServiceAttachmentLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig">DataGoogleAlloydbInstancePscInstanceConfig</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList;

new DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference;

new DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus">consumerNetworkStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject">consumerProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `consumerNetworkStatus`<sup>Required</sup> <a name="consumerNetworkStatus" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus"></a>

```java
public java.lang.String getConsumerNetworkStatus();
```

- *Type:* java.lang.String

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject"></a>

```java
public java.lang.String getConsumerProject();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList;

new DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference;

new DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource">networkAttachmentResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkAttachmentResource`<sup>Required</sup> <a name="networkAttachmentResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource"></a>

```java
public java.lang.String getNetworkAttachmentResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>

---


### DataGoogleAlloydbInstanceQueryInsightsConfigList <a name="DataGoogleAlloydbInstanceQueryInsightsConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceQueryInsightsConfigList;

new DataGoogleAlloydbInstanceQueryInsightsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get"></a>

```java
public DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference <a name="DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference;

new DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig">DataGoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```java
public java.lang.Number getQueryStringLength();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```java
public IResolvable getRecordApplicationTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```java
public IResolvable getRecordClientAddress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstanceQueryInsightsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig">DataGoogleAlloydbInstanceQueryInsightsConfig</a>

---


### DataGoogleAlloydbInstanceReadPoolConfigList <a name="DataGoogleAlloydbInstanceReadPoolConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceReadPoolConfigList;

new DataGoogleAlloydbInstanceReadPoolConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get"></a>

```java
public DataGoogleAlloydbInstanceReadPoolConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAlloydbInstanceReadPoolConfigOutputReference <a name="DataGoogleAlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_alloydb_instance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference;

new DataGoogleAlloydbInstanceReadPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig">DataGoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleAlloydbInstanceReadPoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig">DataGoogleAlloydbInstanceReadPoolConfig</a>

---



