# `dataGoogleOracleDatabaseAutonomousDatabases` Submodule <a name="`dataGoogleOracleDatabaseAutonomousDatabases` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseAutonomousDatabases <a name="DataGoogleOracleDatabaseAutonomousDatabases" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases google_oracle_database_autonomous_databases}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabases;

DataGoogleOracleDatabaseAutonomousDatabases.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#id DataGoogleOracleDatabaseAutonomousDatabases#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the dataset is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.location"></a>

- *Type:* java.lang.String

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#location DataGoogleOracleDatabaseAutonomousDatabases#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#id DataGoogleOracleDatabaseAutonomousDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#project DataGoogleOracleDatabaseAutonomousDatabases#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabases;

DataGoogleOracleDatabaseAutonomousDatabases.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabases;

DataGoogleOracleDatabaseAutonomousDatabases.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabases;

DataGoogleOracleDatabaseAutonomousDatabases.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabases;

DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleOracleDatabaseAutonomousDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleOracleDatabaseAutonomousDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseAutonomousDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.autonomousDatabases">autonomousDatabases</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autonomousDatabases`<sup>Required</sup> <a name="autonomousDatabases" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.autonomousDatabases"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList getAutonomousDatabases();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime;

DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime.builder()
    .build();
```


### DataGoogleOracleDatabaseAutonomousDatabasesConfig <a name="DataGoogleOracleDatabaseAutonomousDatabasesConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesConfig;

DataGoogleOracleDatabaseAutonomousDatabasesConfig.builder()
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
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.location">location</a></code> | <code>java.lang.String</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#id DataGoogleOracleDatabaseAutonomousDatabases#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the dataset is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#location DataGoogleOracleDatabaseAutonomousDatabases#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#id DataGoogleOracleDatabaseAutonomousDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/oracle_database_autonomous_databases#project DataGoogleOracleDatabaseAutonomousDatabases#project}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.deletionProtection">deletionProtection</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.properties"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.apexVersion">apexVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.ordsVersion">ordsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apexVersion`<sup>Required</sup> <a name="apexVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.apexVersion"></a>

```java
public java.lang.String getApexVersion();
```

- *Type:* java.lang.String

---

##### `ordsVersion`<sup>Required</sup> <a name="ordsVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```java
public java.lang.String getOrdsVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList getAllConnectionStrings();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.dedicated"></a>

```java
public java.lang.String getDedicated();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.profiles"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList getProfiles();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.hostFormat">hostFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.isRegional">isRegional</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.sessionMode">sessionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">syntaxFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">tlsAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `hostFormat`<sup>Required</sup> <a name="hostFormat" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```java
public java.lang.String getHostFormat();
```

- *Type:* java.lang.String

---

##### `isRegional`<sup>Required</sup> <a name="isRegional" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```java
public IResolvable getIsRegional();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```java
public java.lang.String getSessionMode();
```

- *Type:* java.lang.String

---

##### `syntaxFormat`<sup>Required</sup> <a name="syntaxFormat" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```java
public java.lang.String getSyntaxFormat();
```

- *Type:* java.lang.String

---

##### `tlsAuthentication`<sup>Required</sup> <a name="tlsAuthentication" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```java
public java.lang.String getTlsAuthentication();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.apexUri">apexUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">databaseTransformsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.graphStudioUri">graphStudioUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">machineLearningNotebookUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">machineLearningUserManagementUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.mongoDbUri">mongoDbUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.ordsUri">ordsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">sqlDevWebUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apexUri`<sup>Required</sup> <a name="apexUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```java
public java.lang.String getApexUri();
```

- *Type:* java.lang.String

---

##### `databaseTransformsUri`<sup>Required</sup> <a name="databaseTransformsUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```java
public java.lang.String getDatabaseTransformsUri();
```

- *Type:* java.lang.String

---

##### `graphStudioUri`<sup>Required</sup> <a name="graphStudioUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```java
public java.lang.String getGraphStudioUri();
```

- *Type:* java.lang.String

---

##### `machineLearningNotebookUri`<sup>Required</sup> <a name="machineLearningNotebookUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```java
public java.lang.String getMachineLearningNotebookUri();
```

- *Type:* java.lang.String

---

##### `machineLearningUserManagementUri`<sup>Required</sup> <a name="machineLearningUserManagementUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```java
public java.lang.String getMachineLearningUserManagementUri();
```

- *Type:* java.lang.String

---

##### `mongoDbUri`<sup>Required</sup> <a name="mongoDbUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```java
public java.lang.String getMongoDbUri();
```

- *Type:* java.lang.String

---

##### `ordsUri`<sup>Required</sup> <a name="ordsUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```java
public java.lang.String getOrdsUri();
```

- *Type:* java.lang.String

---

##### `sqlDevWebUri`<sup>Required</sup> <a name="sqlDevWebUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```java
public java.lang.String getSqlDevWebUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">dataGuardRoleChangedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">disasterRecoveryRoleChangedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">lagTimeDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataGuardRoleChangedTime`<sup>Required</sup> <a name="dataGuardRoleChangedTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```java
public java.lang.String getDataGuardRoleChangedTime();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="disasterRecoveryRoleChangedTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```java
public java.lang.String getDisasterRecoveryRoleChangedTime();
```

- *Type:* java.lang.String

---

##### `lagTimeDuration`<sup>Required</sup> <a name="lagTimeDuration" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```java
public java.lang.String getLagTimeDuration();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.actualUsedDataStorageSizeTb">actualUsedDataStorageSizeTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.allocatedStorageSizeTb">allocatedStorageSizeTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.apexDetails">apexDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">arePrimaryAllowlistedIpsUsed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.backupRetentionPeriodDays">backupRetentionPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionUrls">connectionUrls</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.databaseManagementState">databaseManagementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataSafeState">dataSafeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbEdition">dbEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.failedDataRecoveryDuration">failedDataRecoveryDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isStorageAutoScalingEnabled">isStorageAutoScalingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localDisasterRecoveryType">localDisasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localStandbyDb">localStandbyDb</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceBeginTime">maintenanceBeginTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceEndTime">maintenanceEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceScheduleType">maintenanceScheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">memoryPerOracleComputeUnitGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryTableGbs">memoryTableGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nCharacterSet">nCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nextLongTermBackupTime">nextLongTermBackupTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.operationsInsightsState">operationsInsightsState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.peerDbIds">peerDbIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableState">refreshableState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.scheduledOperationDetails">scheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.supportedCloneRegions">supportedCloneRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">totalAutoBackupStorageSizeGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.usedDataStorageSizeTbs">usedDataStorageSizeTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualUsedDataStorageSizeTb`<sup>Required</sup> <a name="actualUsedDataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```java
public java.lang.Number getActualUsedDataStorageSizeTb();
```

- *Type:* java.lang.Number

---

##### `allocatedStorageSizeTb`<sup>Required</sup> <a name="allocatedStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```java
public java.lang.Number getAllocatedStorageSizeTb();
```

- *Type:* java.lang.Number

---

##### `apexDetails`<sup>Required</sup> <a name="apexDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.apexDetails"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList getApexDetails();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList</a>

---

##### `arePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="arePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```java
public IResolvable getArePrimaryAllowlistedIpsUsed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.availableUpgradeVersions"></a>

```java
public java.util.List<java.lang.String> getAvailableUpgradeVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupRetentionPeriodDays`<sup>Required</sup> <a name="backupRetentionPeriodDays" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodDays();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionStrings"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList</a>

---

##### `connectionUrls`<sup>Required</sup> <a name="connectionUrls" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionUrls"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList getConnectionUrls();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.customerContacts"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList getCustomerContacts();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList</a>

---

##### `databaseManagementState`<sup>Required</sup> <a name="databaseManagementState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.databaseManagementState"></a>

```java
public java.lang.String getDatabaseManagementState();
```

- *Type:* java.lang.String

---

##### `dataSafeState`<sup>Required</sup> <a name="dataSafeState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataSafeState"></a>

```java
public java.lang.String getDataSafeState();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeGb`<sup>Required</sup> <a name="dataStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeGb"></a>

```java
public java.lang.Number getDataStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeTb"></a>

```java
public java.lang.Number getDataStorageSizeTb();
```

- *Type:* java.lang.Number

---

##### `dbEdition`<sup>Required</sup> <a name="dbEdition" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbEdition"></a>

```java
public java.lang.String getDbEdition();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `failedDataRecoveryDuration`<sup>Required</sup> <a name="failedDataRecoveryDuration" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```java
public java.lang.String getFailedDataRecoveryDuration();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isAutoScalingEnabled"></a>

```java
public IResolvable getIsAutoScalingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```java
public IResolvable getIsLocalDataGuardEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isStorageAutoScalingEnabled`<sup>Required</sup> <a name="isStorageAutoScalingEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```java
public IResolvable getIsStorageAutoScalingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimit();
```

- *Type:* java.lang.Number

---

##### `localDisasterRecoveryType`<sup>Required</sup> <a name="localDisasterRecoveryType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localDisasterRecoveryType"></a>

```java
public java.lang.String getLocalDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `localStandbyDb`<sup>Required</sup> <a name="localStandbyDb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localStandbyDb"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList getLocalStandbyDb();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList</a>

---

##### `maintenanceBeginTime`<sup>Required</sup> <a name="maintenanceBeginTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceBeginTime"></a>

```java
public java.lang.String getMaintenanceBeginTime();
```

- *Type:* java.lang.String

---

##### `maintenanceEndTime`<sup>Required</sup> <a name="maintenanceEndTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceEndTime"></a>

```java
public java.lang.String getMaintenanceEndTime();
```

- *Type:* java.lang.String

---

##### `maintenanceScheduleType`<sup>Required</sup> <a name="maintenanceScheduleType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceScheduleType"></a>

```java
public java.lang.String getMaintenanceScheduleType();
```

- *Type:* java.lang.String

---

##### `memoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```java
public java.lang.Number getMemoryPerOracleComputeUnitGbs();
```

- *Type:* java.lang.Number

---

##### `memoryTableGbs`<sup>Required</sup> <a name="memoryTableGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryTableGbs"></a>

```java
public java.lang.Number getMemoryTableGbs();
```

- *Type:* java.lang.Number

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.mtlsConnectionRequired"></a>

```java
public IResolvable getMtlsConnectionRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nCharacterSet`<sup>Required</sup> <a name="nCharacterSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nCharacterSet"></a>

```java
public java.lang.String getNCharacterSet();
```

- *Type:* java.lang.String

---

##### `nextLongTermBackupTime`<sup>Required</sup> <a name="nextLongTermBackupTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nextLongTermBackupTime"></a>

```java
public java.lang.String getNextLongTermBackupTime();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `operationsInsightsState`<sup>Required</sup> <a name="operationsInsightsState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.operationsInsightsState"></a>

```java
public java.lang.String getOperationsInsightsState();
```

- *Type:* java.lang.String

---

##### `peerDbIds`<sup>Required</sup> <a name="peerDbIds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.peerDbIds"></a>

```java
public java.util.List<java.lang.String> getPeerDbIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpoint"></a>

```java
public java.lang.String getPrivateEndpoint();
```

- *Type:* java.lang.String

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

---

##### `refreshableState`<sup>Required</sup> <a name="refreshableState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableState"></a>

```java
public java.lang.String getRefreshableState();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `scheduledOperationDetails`<sup>Required</sup> <a name="scheduledOperationDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.scheduledOperationDetails"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList getScheduledOperationDetails();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList</a>

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```java
public java.lang.String getSqlWebDeveloperUrl();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedCloneRegions`<sup>Required</sup> <a name="supportedCloneRegions" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.supportedCloneRegions"></a>

```java
public java.util.List<java.lang.String> getSupportedCloneRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="totalAutoBackupStorageSizeGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```java
public java.lang.Number getTotalAutoBackupStorageSizeGbs();
```

- *Type:* java.lang.Number

---

##### `usedDataStorageSizeTbs`<sup>Required</sup> <a name="usedDataStorageSizeTbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```java
public java.lang.Number getUsedDataStorageSizeTbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.stopTime">stopTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList getStopTime();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.get"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_autonomous_databases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference;

new DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime</a>

---



