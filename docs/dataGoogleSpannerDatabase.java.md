# `dataGoogleSpannerDatabase` Submodule <a name="`dataGoogleSpannerDatabase` Submodule" id="@cdktf/provider-google.dataGoogleSpannerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSpannerDatabase <a name="DataGoogleSpannerDatabase" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database google_spanner_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabase;

DataGoogleSpannerDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .instance(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#instance DataGoogleSpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#name DataGoogleSpannerDatabase#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSpannerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabase;

DataGoogleSpannerDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabase;

DataGoogleSpannerDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabase;

DataGoogleSpannerDatabase.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabase;

DataGoogleSpannerDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleSpannerDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleSpannerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleSpannerDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleSpannerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSpannerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.databaseDialect">databaseDialect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.ddl">ddl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.deletionProtection">deletionProtection</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.enableDropProtection">enableDropProtection</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList">DataGoogleSpannerDatabaseEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `databaseDialect`<sup>Required</sup> <a name="databaseDialect" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.databaseDialect"></a>

```java
public java.lang.String getDatabaseDialect();
```

- *Type:* java.lang.String

---

##### `ddl`<sup>Required</sup> <a name="ddl" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.ddl"></a>

```java
public java.util.List<java.lang.String> getDdl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableDropProtection`<sup>Required</sup> <a name="enableDropProtection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.enableDropProtection"></a>

```java
public IResolvable getEnableDropProtection();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.encryptionConfig"></a>

```java
public DataGoogleSpannerDatabaseEncryptionConfigList getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList">DataGoogleSpannerDatabaseEncryptionConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `versionRetentionPeriod`<sup>Required</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.versionRetentionPeriod"></a>

```java
public java.lang.String getVersionRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSpannerDatabaseConfig <a name="DataGoogleSpannerDatabaseConfig" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabaseConfig;

DataGoogleSpannerDatabaseConfig.builder()
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
    .instance(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#instance DataGoogleSpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#name DataGoogleSpannerDatabase#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}.

---

### DataGoogleSpannerDatabaseEncryptionConfig <a name="DataGoogleSpannerDatabaseEncryptionConfig" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabaseEncryptionConfig;

DataGoogleSpannerDatabaseEncryptionConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSpannerDatabaseEncryptionConfigList <a name="DataGoogleSpannerDatabaseEncryptionConfigList" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabaseEncryptionConfigList;

new DataGoogleSpannerDatabaseEncryptionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.get"></a>

```java
public DataGoogleSpannerDatabaseEncryptionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSpannerDatabaseEncryptionConfigOutputReference <a name="DataGoogleSpannerDatabaseEncryptionConfigOutputReference" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_spanner_database.DataGoogleSpannerDatabaseEncryptionConfigOutputReference;

new DataGoogleSpannerDatabaseEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames">kmsKeyNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig">DataGoogleSpannerDatabaseEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `kmsKeyNames`<sup>Required</sup> <a name="kmsKeyNames" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames"></a>

```java
public java.util.List<java.lang.String> getKmsKeyNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleSpannerDatabaseEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig">DataGoogleSpannerDatabaseEncryptionConfig</a>

---



