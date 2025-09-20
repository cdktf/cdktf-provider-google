# `dataGoogleSqlDatabaseInstances` Submodule <a name="`dataGoogleSqlDatabaseInstances` Submodule" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlDatabaseInstances <a name="DataGoogleSqlDatabaseInstances" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances google_sql_database_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstances;

DataGoogleSqlDatabaseInstances.Builder.create(Construct scope, java.lang.String id)
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
//  .databaseVersion(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .tier(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | To filter out the database instances which are of the specified database version. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#id DataGoogleSqlDatabaseInstances#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Project ID of the project that contains the instances. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | To filter out the database instances which are located in this specified region. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | To filter out the database instances based on the current state of the database instance, valid values include : "SQL_INSTANCE_STATE_UNSPECIFIED", "RUNNABLE", "SUSPENDED", "PENDING_DELETE", "PENDING_CREATE", "MAINTENANCE" and "FAILED". |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | To filter out the database instances based on the machine type. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | To filter out the database instances which are located in this specified zone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseVersion`<sup>Optional</sup> <a name="databaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.databaseVersion"></a>

- *Type:* java.lang.String

To filter out the database instances which are of the specified database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#database_version DataGoogleSqlDatabaseInstances#database_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#id DataGoogleSqlDatabaseInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Project ID of the project that contains the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#project DataGoogleSqlDatabaseInstances#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.region"></a>

- *Type:* java.lang.String

To filter out the database instances which are located in this specified region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#region DataGoogleSqlDatabaseInstances#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.state"></a>

- *Type:* java.lang.String

To filter out the database instances based on the current state of the database instance, valid values include : "SQL_INSTANCE_STATE_UNSPECIFIED", "RUNNABLE", "SUSPENDED", "PENDING_DELETE", "PENDING_CREATE", "MAINTENANCE" and "FAILED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#state DataGoogleSqlDatabaseInstances#state}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

To filter out the database instances based on the machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#tier DataGoogleSqlDatabaseInstances#tier}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

To filter out the database instances which are located in this specified zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#zone DataGoogleSqlDatabaseInstances#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetDatabaseVersion">resetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDatabaseVersion` <a name="resetDatabaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetDatabaseVersion"></a>

```java
public void resetDatabaseVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetState"></a>

```java
public void resetState()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetTier"></a>

```java
public void resetTier()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSqlDatabaseInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstances;

DataGoogleSqlDatabaseInstances.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstances;

DataGoogleSqlDatabaseInstances.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstances;

DataGoogleSqlDatabaseInstances.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstances;

DataGoogleSqlDatabaseInstances.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleSqlDatabaseInstances.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleSqlDatabaseInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleSqlDatabaseInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleSqlDatabaseInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSqlDatabaseInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList">DataGoogleSqlDatabaseInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersionInput">databaseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.instances"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesList getInstances();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList">DataGoogleSqlDatabaseInstancesInstancesList</a>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersionInput"></a>

```java
public java.lang.String getDatabaseVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlDatabaseInstancesConfig <a name="DataGoogleSqlDatabaseInstancesConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesConfig;

DataGoogleSqlDatabaseInstancesConfig.builder()
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
//  .databaseVersion(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .tier(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | To filter out the database instances which are of the specified database version. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#id DataGoogleSqlDatabaseInstances#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Project ID of the project that contains the instances. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.region">region</a></code> | <code>java.lang.String</code> | To filter out the database instances which are located in this specified region. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.state">state</a></code> | <code>java.lang.String</code> | To filter out the database instances based on the current state of the database instance, valid values include : "SQL_INSTANCE_STATE_UNSPECIFIED", "RUNNABLE", "SUSPENDED", "PENDING_DELETE", "PENDING_CREATE", "MAINTENANCE" and "FAILED". |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | To filter out the database instances based on the machine type. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | To filter out the database instances which are located in this specified zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseVersion`<sup>Optional</sup> <a name="databaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

To filter out the database instances which are of the specified database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#database_version DataGoogleSqlDatabaseInstances#database_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#id DataGoogleSqlDatabaseInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Project ID of the project that contains the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#project DataGoogleSqlDatabaseInstances#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

To filter out the database instances which are located in this specified region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#region DataGoogleSqlDatabaseInstances#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

To filter out the database instances based on the current state of the database instance, valid values include : "SQL_INSTANCE_STATE_UNSPECIFIED", "RUNNABLE", "SUSPENDED", "PENDING_DELETE", "PENDING_CREATE", "MAINTENANCE" and "FAILED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#state DataGoogleSqlDatabaseInstances#state}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

To filter out the database instances based on the machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#tier DataGoogleSqlDatabaseInstances#tier}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

To filter out the database instances which are located in this specified zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sql_database_instances#zone DataGoogleSqlDatabaseInstances#zone}

---

### DataGoogleSqlDatabaseInstancesInstances <a name="DataGoogleSqlDatabaseInstancesInstances" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstances;

DataGoogleSqlDatabaseInstancesInstances.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesClone <a name="DataGoogleSqlDatabaseInstancesInstancesClone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesClone;

DataGoogleSqlDatabaseInstancesInstancesClone.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesDnsNames <a name="DataGoogleSqlDatabaseInstancesInstancesDnsNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesDnsNames;

DataGoogleSqlDatabaseInstancesInstancesDnsNames.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesIpAddress <a name="DataGoogleSqlDatabaseInstancesInstancesIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesIpAddress;

DataGoogleSqlDatabaseInstancesInstancesIpAddress.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration <a name="DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration;

DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesReplicationCluster <a name="DataGoogleSqlDatabaseInstancesInstancesReplicationCluster" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesReplicationCluster;

DataGoogleSqlDatabaseInstancesInstancesReplicationCluster.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext <a name="DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext;

DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesServerCaCert <a name="DataGoogleSqlDatabaseInstancesInstancesServerCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert;

DataGoogleSqlDatabaseInstancesInstancesServerCaCert.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettings <a name="DataGoogleSqlDatabaseInstancesInstancesSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettings;

DataGoogleSqlDatabaseInstancesInstancesSettings.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig;

DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures;

DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration;

DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings;

DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig;

DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags;

DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags;

DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig;

DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod;

DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig;

DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration;

DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks;

DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig;

DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections;

DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference;

DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow;

DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy;

DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy.builder()
    .build();
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig;

DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSqlDatabaseInstancesInstancesCloneList <a name="DataGoogleSqlDatabaseInstancesInstancesCloneList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesCloneList;

new DataGoogleSqlDatabaseInstancesInstancesCloneList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.databaseNames">databaseNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.pointInTime">pointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.preferredZone">preferredZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.sourceInstanceName">sourceInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone">DataGoogleSqlDatabaseInstancesInstancesClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.allocatedIpRange"></a>

```java
public java.lang.String getAllocatedIpRange();
```

- *Type:* java.lang.String

---

##### `databaseNames`<sup>Required</sup> <a name="databaseNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.databaseNames"></a>

```java
public java.util.List<java.lang.String> getDatabaseNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.pointInTime"></a>

```java
public java.lang.String getPointInTime();
```

- *Type:* java.lang.String

---

##### `preferredZone`<sup>Required</sup> <a name="preferredZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.preferredZone"></a>

```java
public java.lang.String getPreferredZone();
```

- *Type:* java.lang.String

---

##### `sourceInstanceName`<sup>Required</sup> <a name="sourceInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.sourceInstanceName"></a>

```java
public java.lang.String getSourceInstanceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesClone getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone">DataGoogleSqlDatabaseInstancesInstancesClone</a>

---


### DataGoogleSqlDatabaseInstancesInstancesDnsNamesList <a name="DataGoogleSqlDatabaseInstancesInstancesDnsNamesList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList;

new DataGoogleSqlDatabaseInstancesInstancesDnsNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.dnsScope">dnsScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNames">DataGoogleSqlDatabaseInstancesInstancesDnsNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `dnsScope`<sup>Required</sup> <a name="dnsScope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.dnsScope"></a>

```java
public java.lang.String getDnsScope();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesDnsNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNames">DataGoogleSqlDatabaseInstancesInstancesDnsNames</a>

---


### DataGoogleSqlDatabaseInstancesInstancesIpAddressList <a name="DataGoogleSqlDatabaseInstancesInstancesIpAddressList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList;

new DataGoogleSqlDatabaseInstancesInstancesIpAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.timeToRetire">timeToRetire</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress">DataGoogleSqlDatabaseInstancesInstancesIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `timeToRetire`<sup>Required</sup> <a name="timeToRetire" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.timeToRetire"></a>

```java
public java.lang.String getTimeToRetire();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress">DataGoogleSqlDatabaseInstancesInstancesIpAddress</a>

---


### DataGoogleSqlDatabaseInstancesInstancesList <a name="DataGoogleSqlDatabaseInstancesInstancesList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesList;

new DataGoogleSqlDatabaseInstancesInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.availableMaintenanceVersions">availableMaintenanceVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList">DataGoogleSqlDatabaseInstancesInstancesCloneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.deletionProtection">deletionProtection</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.dnsNames">dnsNames</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList">DataGoogleSqlDatabaseInstancesInstancesDnsNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.encryptionKeyName">encryptionKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.firstIpAddress">firstIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList">DataGoogleSqlDatabaseInstancesInstancesIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.maintenanceVersion">maintenanceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.masterInstanceName">masterInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.pscServiceAttachmentLink">pscServiceAttachmentLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList">DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicaNames">replicaNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicationCluster">replicationCluster</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList">DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.restoreBackupContext">restoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.rootPassword">rootPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serverCaCert">serverCaCert</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList">DataGoogleSqlDatabaseInstancesInstancesServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serviceAccountEmailAddress">serviceAccountEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances">DataGoogleSqlDatabaseInstancesInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableMaintenanceVersions`<sup>Required</sup> <a name="availableMaintenanceVersions" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.availableMaintenanceVersions"></a>

```java
public java.util.List<java.lang.String> getAvailableMaintenanceVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.clone"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesCloneList getClone();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList">DataGoogleSqlDatabaseInstancesInstancesCloneList</a>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.dnsNames"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesDnsNamesList getDnsNames();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesDnsNamesList">DataGoogleSqlDatabaseInstancesInstancesDnsNamesList</a>

---

##### `encryptionKeyName`<sup>Required</sup> <a name="encryptionKeyName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.encryptionKeyName"></a>

```java
public java.lang.String getEncryptionKeyName();
```

- *Type:* java.lang.String

---

##### `firstIpAddress`<sup>Required</sup> <a name="firstIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.firstIpAddress"></a>

```java
public java.lang.String getFirstIpAddress();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.ipAddress"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesIpAddressList getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList">DataGoogleSqlDatabaseInstancesInstancesIpAddressList</a>

---

##### `maintenanceVersion`<sup>Required</sup> <a name="maintenanceVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.maintenanceVersion"></a>

```java
public java.lang.String getMaintenanceVersion();
```

- *Type:* java.lang.String

---

##### `masterInstanceName`<sup>Required</sup> <a name="masterInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.masterInstanceName"></a>

```java
public java.lang.String getMasterInstanceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pscServiceAttachmentLink`<sup>Required</sup> <a name="pscServiceAttachmentLink" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.pscServiceAttachmentLink"></a>

```java
public java.lang.String getPscServiceAttachmentLink();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicaConfiguration`<sup>Required</sup> <a name="replicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicaConfiguration"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList getReplicaConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList">DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList</a>

---

##### `replicaNames`<sup>Required</sup> <a name="replicaNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicaNames"></a>

```java
public java.util.List<java.lang.String> getReplicaNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replicationCluster`<sup>Required</sup> <a name="replicationCluster" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicationCluster"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList getReplicationCluster();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList">DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList</a>

---

##### `restoreBackupContext`<sup>Required</sup> <a name="restoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.restoreBackupContext"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList getRestoreBackupContext();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList</a>

---

##### `rootPassword`<sup>Required</sup> <a name="rootPassword" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.rootPassword"></a>

```java
public java.lang.String getRootPassword();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serverCaCert`<sup>Required</sup> <a name="serverCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serverCaCert"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesServerCaCertList getServerCaCert();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList">DataGoogleSqlDatabaseInstancesInstancesServerCaCertList</a>

---

##### `serviceAccountEmailAddress`<sup>Required</sup> <a name="serviceAccountEmailAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serviceAccountEmailAddress"></a>

```java
public java.lang.String getServiceAccountEmailAddress();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.settings"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsList getSettings();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstances getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances">DataGoogleSqlDatabaseInstancesInstances</a>

---


### DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList <a name="DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList;

new DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.cascadableReplica">cascadableReplica</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.connectRetryInterval">connectRetryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.dumpFilePath">dumpFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.failoverTarget">failoverTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">masterHeartbeatPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.sslCipher">sslCipher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.verifyServerCertificate">verifyServerCertificate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration">DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `cascadableReplica`<sup>Required</sup> <a name="cascadableReplica" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.cascadableReplica"></a>

```java
public IResolvable getCascadableReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `connectRetryInterval`<sup>Required</sup> <a name="connectRetryInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```java
public java.lang.Number getConnectRetryInterval();
```

- *Type:* java.lang.Number

---

##### `dumpFilePath`<sup>Required</sup> <a name="dumpFilePath" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```java
public java.lang.String getDumpFilePath();
```

- *Type:* java.lang.String

---

##### `failoverTarget`<sup>Required</sup> <a name="failoverTarget" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.failoverTarget"></a>

```java
public IResolvable getFailoverTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `masterHeartbeatPeriod`<sup>Required</sup> <a name="masterHeartbeatPeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```java
public java.lang.Number getMasterHeartbeatPeriod();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sslCipher`<sup>Required</sup> <a name="sslCipher" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.sslCipher"></a>

```java
public java.lang.String getSslCipher();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `verifyServerCertificate`<sup>Required</sup> <a name="verifyServerCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```java
public IResolvable getVerifyServerCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration">DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration</a>

---


### DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList <a name="DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList;

new DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.drReplica">drReplica</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.failoverDrReplicaName">failoverDrReplicaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.psaWriteEndpoint">psaWriteEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationCluster">DataGoogleSqlDatabaseInstancesInstancesReplicationCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `drReplica`<sup>Required</sup> <a name="drReplica" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.drReplica"></a>

```java
public IResolvable getDrReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `failoverDrReplicaName`<sup>Required</sup> <a name="failoverDrReplicaName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.failoverDrReplicaName"></a>

```java
public java.lang.String getFailoverDrReplicaName();
```

- *Type:* java.lang.String

---

##### `psaWriteEndpoint`<sup>Required</sup> <a name="psaWriteEndpoint" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.psaWriteEndpoint"></a>

```java
public java.lang.String getPsaWriteEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationClusterOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesReplicationCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicationCluster">DataGoogleSqlDatabaseInstancesInstancesReplicationCluster</a>

---


### DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList <a name="DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList;

new DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.backupRunId">backupRunId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupRunId`<sup>Required</sup> <a name="backupRunId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.backupRunId"></a>

```java
public java.lang.Number getBackupRunId();
```

- *Type:* java.lang.Number

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext</a>

---


### DataGoogleSqlDatabaseInstancesInstancesServerCaCertList <a name="DataGoogleSqlDatabaseInstancesInstancesServerCaCertList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList;

new DataGoogleSqlDatabaseInstancesInstancesServerCaCertList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert">DataGoogleSqlDatabaseInstancesInstancesServerCaCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.sha1Fingerprint"></a>

```java
public java.lang.String getSha1Fingerprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesServerCaCert getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert">DataGoogleSqlDatabaseInstancesInstancesServerCaCert</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures">DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures">DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeatures</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">retainedBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retainedBackups`<sup>Required</sup> <a name="retainedBackups" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```java
public java.lang.Number getRetainedBackups();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">backupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">binaryLogEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">transactionLogRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupRetentionSettings`<sup>Required</sup> <a name="backupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList getBackupRetentionSettings();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList</a>

---

##### `binaryLogEnabled`<sup>Required</sup> <a name="binaryLogEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```java
public IResolvable getBinaryLogEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```java
public IResolvable getPointInTimeRecoveryEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `transactionLogRetentionDays`<sup>Required</sup> <a name="transactionLogRetentionDays" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```java
public java.lang.Number getTransactionLogRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlags</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabled">connectionPoolingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.flags">flags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionPoolingEnabled`<sup>Required</sup> <a name="connectionPoolingEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabled"></a>

```java
public IResolvable getConnectionPoolingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.flags"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList getFlags();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigFlagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfig</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.dataCacheEnabled">dataCacheEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCacheEnabled`<sup>Required</sup> <a name="dataCacheEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.dataCacheEnabled"></a>

```java
public IResolvable getDataCacheEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfig</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">queryInsightsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInsightsEnabled`<sup>Required</sup> <a name="queryInsightsEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```java
public IResolvable getQueryInsightsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```java
public java.lang.Number getQueryStringLength();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```java
public IResolvable getRecordApplicationTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```java
public IResolvable getRecordClientAddress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.authorizedNetworks">authorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNames">customSubjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">enablePrivatePathForGoogleCloudServices</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.ipv4Enabled">ipv4Enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.privateNetwork">privateNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.serverCaMode">serverCaMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.serverCaPool">serverCaPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```java
public java.lang.String getAllocatedIpRange();
```

- *Type:* java.lang.String

---

##### `authorizedNetworks`<sup>Required</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList getAuthorizedNetworks();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `customSubjectAlternativeNames`<sup>Required</sup> <a name="customSubjectAlternativeNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getCustomSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="enablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```java
public IResolvable getEnablePrivatePathForGoogleCloudServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ipv4Enabled`<sup>Required</sup> <a name="ipv4Enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```java
public IResolvable getIpv4Enabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `privateNetwork`<sup>Required</sup> <a name="privateNetwork" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```java
public java.lang.String getPrivateNetwork();
```

- *Type:* java.lang.String

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.pscConfig"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList</a>

---

##### `serverCaMode`<sup>Required</sup> <a name="serverCaMode" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.serverCaMode"></a>

```java
public java.lang.String getServerCaMode();
```

- *Type:* java.lang.String

---

##### `serverCaPool`<sup>Required</sup> <a name="serverCaPool" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.serverCaPool"></a>

```java
public java.lang.String getServerCaPool();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.networkAttachmentUri">networkAttachmentUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections">pscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled">pscEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedConsumerProjects`<sup>Required</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkAttachmentUri`<sup>Required</sup> <a name="networkAttachmentUri" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.networkAttachmentUri"></a>

```java
public java.lang.String getNetworkAttachmentUri();
```

- *Type:* java.lang.String

---

##### `pscAutoConnections`<sup>Required</sup> <a name="pscAutoConnections" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList getPscAutoConnections();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList</a>

---

##### `pscEnabled`<sup>Required</sup> <a name="pscEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled"></a>

```java
public IResolvable getPscEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfig</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId">consumerServiceProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `consumerServiceProjectId`<sup>Required</sup> <a name="consumerServiceProjectId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId"></a>

```java
public java.lang.String getConsumerServiceProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationPscConfigPscAutoConnections</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.followGaeApplication">followGaeApplication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.secondaryZone">secondaryZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `followGaeApplication`<sup>Required</sup> <a name="followGaeApplication" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```java
public java.lang.String getFollowGaeApplication();
```

- *Type:* java.lang.String

---

##### `secondaryZone`<sup>Required</sup> <a name="secondaryZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```java
public java.lang.String getSecondaryZone();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.updateTrack">updateTrack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `updateTrack`<sup>Required</sup> <a name="updateTrack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```java
public java.lang.String getUpdateTrack();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activationPolicy">activationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList">DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.availabilityType">availabilityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.connectionPoolConfig">connectionPoolConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.connectorEnforcement">connectorEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.databaseFlags">databaseFlags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.dataCacheConfig">dataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresize">diskAutoresize</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresizeLimit">diskAutoresizeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskSize">diskSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.effectiveAvailabilityType">effectiveAvailabilityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.enableDataplexIntegration">enableDataplexIntegration</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.enableGoogleMlIntegration">enableGoogleMlIntegration</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.insightsConfig">insightsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.locationPreference">locationPreference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.passwordValidationPolicy">passwordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.pricingPlan">pricingPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.retainBackupsOnDelete">retainBackupsOnDelete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.sqlServerAuditConfig">sqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.userLabels">userLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings">DataGoogleSqlDatabaseInstancesInstancesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activationPolicy`<sup>Required</sup> <a name="activationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activationPolicy"></a>

```java
public java.lang.String getActivationPolicy();
```

- *Type:* java.lang.String

---

##### `activeDirectoryConfig`<sup>Required</sup> <a name="activeDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activeDirectoryConfig"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList getActiveDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList</a>

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.advancedMachineFeatures"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList">DataGoogleSqlDatabaseInstancesInstancesSettingsAdvancedMachineFeaturesList</a>

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.availabilityType"></a>

```java
public java.lang.String getAvailabilityType();
```

- *Type:* java.lang.String

---

##### `backupConfiguration`<sup>Required</sup> <a name="backupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.backupConfiguration"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList getBackupConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList</a>

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `connectionPoolConfig`<sup>Required</sup> <a name="connectionPoolConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.connectionPoolConfig"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList getConnectionPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsConnectionPoolConfigList</a>

---

##### `connectorEnforcement`<sup>Required</sup> <a name="connectorEnforcement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.connectorEnforcement"></a>

```java
public java.lang.String getConnectorEnforcement();
```

- *Type:* java.lang.String

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.databaseFlags"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList getDatabaseFlags();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList</a>

---

##### `dataCacheConfig`<sup>Required</sup> <a name="dataCacheConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.dataCacheConfig"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList getDataCacheConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsDataCacheConfigList</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.deletionProtectionEnabled"></a>

```java
public IResolvable getDeletionProtectionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.denyMaintenancePeriod"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList getDenyMaintenancePeriod();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList</a>

---

##### `diskAutoresize`<sup>Required</sup> <a name="diskAutoresize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresize"></a>

```java
public IResolvable getDiskAutoresize();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `diskAutoresizeLimit`<sup>Required</sup> <a name="diskAutoresizeLimit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresizeLimit"></a>

```java
public java.lang.Number getDiskAutoresizeLimit();
```

- *Type:* java.lang.Number

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskSize"></a>

```java
public java.lang.Number getDiskSize();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `effectiveAvailabilityType`<sup>Required</sup> <a name="effectiveAvailabilityType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.effectiveAvailabilityType"></a>

```java
public java.lang.String getEffectiveAvailabilityType();
```

- *Type:* java.lang.String

---

##### `enableDataplexIntegration`<sup>Required</sup> <a name="enableDataplexIntegration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.enableDataplexIntegration"></a>

```java
public IResolvable getEnableDataplexIntegration();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableGoogleMlIntegration`<sup>Required</sup> <a name="enableGoogleMlIntegration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.enableGoogleMlIntegration"></a>

```java
public IResolvable getEnableGoogleMlIntegration();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `insightsConfig`<sup>Required</sup> <a name="insightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.insightsConfig"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList getInsightsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList</a>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.ipConfiguration"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList</a>

---

##### `locationPreference`<sup>Required</sup> <a name="locationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.locationPreference"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList getLocationPreference();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.maintenanceWindow"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList</a>

---

##### `passwordValidationPolicy`<sup>Required</sup> <a name="passwordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.passwordValidationPolicy"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList getPasswordValidationPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList</a>

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.pricingPlan"></a>

```java
public java.lang.String getPricingPlan();
```

- *Type:* java.lang.String

---

##### `retainBackupsOnDelete`<sup>Required</sup> <a name="retainBackupsOnDelete" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.retainBackupsOnDelete"></a>

```java
public IResolvable getRetainBackupsOnDelete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sqlServerAuditConfig`<sup>Required</sup> <a name="sqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.sqlServerAuditConfig"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList getSqlServerAuditConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.userLabels"></a>

```java
public StringMap getUserLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings">DataGoogleSqlDatabaseInstancesInstancesSettings</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.complexity">complexity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">disallowUsernameSubstring</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">enablePasswordPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">passwordChangeInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">reuseInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `complexity`<sup>Required</sup> <a name="complexity" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```java
public java.lang.String getComplexity();
```

- *Type:* java.lang.String

---

##### `disallowUsernameSubstring`<sup>Required</sup> <a name="disallowUsernameSubstring" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```java
public IResolvable getDisallowUsernameSubstring();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enablePasswordPolicy`<sup>Required</sup> <a name="enablePasswordPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```java
public IResolvable getEnablePasswordPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `passwordChangeInterval`<sup>Required</sup> <a name="passwordChangeInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```java
public java.lang.String getPasswordChangeInterval();
```

- *Type:* java.lang.String

---

##### `reuseInterval`<sup>Required</sup> <a name="reuseInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```java
public java.lang.Number getReuseInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList;

new DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.get"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_sql_database_instances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference;

new DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">uploadInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```java
public java.lang.String getRetentionInterval();
```

- *Type:* java.lang.String

---

##### `uploadInterval`<sup>Required</sup> <a name="uploadInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```java
public java.lang.String getUploadInterval();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig</a>

---



