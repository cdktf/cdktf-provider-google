# `dataGoogleOracleDatabaseDbServers` Submodule <a name="`dataGoogleOracleDatabaseDbServers` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseDbServers <a name="DataGoogleOracleDatabaseDbServers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers google_oracle_database_db_servers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServers;

DataGoogleOracleDatabaseDbServers.Builder.create(Construct scope, java.lang.String id)
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
    .cloudExadataInfrastructure(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.cloudExadataInfrastructure">cloudExadataInfrastructure</a></code> | <code>java.lang.String</code> | exadata. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the dataset is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructure`<sup>Required</sup> <a name="cloudExadataInfrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.cloudExadataInfrastructure"></a>

- *Type:* java.lang.String

exadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#cloud_exadata_infrastructure DataGoogleOracleDatabaseDbServers#cloud_exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.location"></a>

- *Type:* java.lang.String

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#location DataGoogleOracleDatabaseDbServers#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#project DataGoogleOracleDatabaseDbServers#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseDbServers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServers;

DataGoogleOracleDatabaseDbServers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServers;

DataGoogleOracleDatabaseDbServers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServers;

DataGoogleOracleDatabaseDbServers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServers;

DataGoogleOracleDatabaseDbServers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleOracleDatabaseDbServers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseDbServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleOracleDatabaseDbServers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleOracleDatabaseDbServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseDbServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dbServers">dbServers</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList">DataGoogleOracleDatabaseDbServersDbServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructureInput">cloudExadataInfrastructureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructure">cloudExadataInfrastructure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dbServers"></a>

```java
public DataGoogleOracleDatabaseDbServersDbServersList getDbServers();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList">DataGoogleOracleDatabaseDbServersDbServersList</a>

---

##### `cloudExadataInfrastructureInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructureInput"></a>

```java
public java.lang.String getCloudExadataInfrastructureInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructure`<sup>Required</sup> <a name="cloudExadataInfrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructure"></a>

```java
public java.lang.String getCloudExadataInfrastructure();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseDbServersConfig <a name="DataGoogleOracleDatabaseDbServersConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServersConfig;

DataGoogleOracleDatabaseDbServersConfig.builder()
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
    .cloudExadataInfrastructure(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.cloudExadataInfrastructure">cloudExadataInfrastructure</a></code> | <code>java.lang.String</code> | exadata. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.location">location</a></code> | <code>java.lang.String</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the dataset is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructure`<sup>Required</sup> <a name="cloudExadataInfrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.cloudExadataInfrastructure"></a>

```java
public java.lang.String getCloudExadataInfrastructure();
```

- *Type:* java.lang.String

exadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#cloud_exadata_infrastructure DataGoogleOracleDatabaseDbServers#cloud_exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#location DataGoogleOracleDatabaseDbServers#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/oracle_database_db_servers#project DataGoogleOracleDatabaseDbServers#project}

---

### DataGoogleOracleDatabaseDbServersDbServers <a name="DataGoogleOracleDatabaseDbServersDbServers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServersDbServers;

DataGoogleOracleDatabaseDbServersDbServers.builder()
    .build();
```


### DataGoogleOracleDatabaseDbServersDbServersProperties <a name="DataGoogleOracleDatabaseDbServersDbServersProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServersDbServersProperties;

DataGoogleOracleDatabaseDbServersDbServersProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseDbServersDbServersList <a name="DataGoogleOracleDatabaseDbServersDbServersList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServersDbServersList;

new DataGoogleOracleDatabaseDbServersDbServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.get"></a>

```java
public DataGoogleOracleDatabaseDbServersDbServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseDbServersDbServersOutputReference <a name="DataGoogleOracleDatabaseDbServersDbServersOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServersDbServersOutputReference;

new DataGoogleOracleDatabaseDbServersDbServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList">DataGoogleOracleDatabaseDbServersDbServersPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers">DataGoogleOracleDatabaseDbServersDbServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.properties"></a>

```java
public DataGoogleOracleDatabaseDbServersDbServersPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList">DataGoogleOracleDatabaseDbServersDbServersPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseDbServersDbServers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers">DataGoogleOracleDatabaseDbServersDbServers</a>

---


### DataGoogleOracleDatabaseDbServersDbServersPropertiesList <a name="DataGoogleOracleDatabaseDbServersDbServersPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList;

new DataGoogleOracleDatabaseDbServersDbServersPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.get"></a>

```java
public DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference <a name="DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_oracle_database_db_servers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference;

new DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeIds">dbNodeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxDbNodeStorageSizeGb">maxDbNodeStorageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxMemorySizeGb">maxMemorySizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxOcpuCount">maxOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.vmCount">vmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties">DataGoogleOracleDatabaseDbServersDbServersProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbNodeIds`<sup>Required</sup> <a name="dbNodeIds" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeIds"></a>

```java
public java.util.List<java.lang.String> getDbNodeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```java
public java.lang.Number getDbNodeStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `maxDbNodeStorageSizeGb`<sup>Required</sup> <a name="maxDbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```java
public java.lang.Number getMaxDbNodeStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `maxMemorySizeGb`<sup>Required</sup> <a name="maxMemorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxMemorySizeGb"></a>

```java
public java.lang.Number getMaxMemorySizeGb();
```

- *Type:* java.lang.Number

---

##### `maxOcpuCount`<sup>Required</sup> <a name="maxOcpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxOcpuCount"></a>

```java
public java.lang.Number getMaxOcpuCount();
```

- *Type:* java.lang.Number

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.memorySizeGb"></a>

```java
public java.lang.Number getMemorySizeGb();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.vmCount"></a>

```java
public java.lang.Number getVmCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.internalValue"></a>

```java
public DataGoogleOracleDatabaseDbServersDbServersProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties">DataGoogleOracleDatabaseDbServersDbServersProperties</a>

---



