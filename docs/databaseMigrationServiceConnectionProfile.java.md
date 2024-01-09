# `databaseMigrationServiceConnectionProfile` Submodule <a name="`databaseMigrationServiceConnectionProfile` Submodule" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServiceConnectionProfile <a name="DatabaseMigrationServiceConnectionProfile" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile google_database_migration_service_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfile;

DatabaseMigrationServiceConnectionProfile.Builder.create(Construct scope, java.lang.String id)
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
    .connectionProfileId(java.lang.String)
//  .alloydb(DatabaseMigrationServiceConnectionProfileAlloydb)
//  .cloudsql(DatabaseMigrationServiceConnectionProfileCloudsql)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .mysql(DatabaseMigrationServiceConnectionProfileMysql)
//  .oracle(DatabaseMigrationServiceConnectionProfileOracle)
//  .postgresql(DatabaseMigrationServiceConnectionProfilePostgresql)
//  .project(java.lang.String)
//  .timeouts(DatabaseMigrationServiceConnectionProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.connectionProfileId">connectionProfileId</a></code> | <code>java.lang.String</code> | The ID of the connection profile. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.alloydb">alloydb</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a></code> | alloydb block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.cloudsql">cloudsql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a></code> | cloudsql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The connection profile display name. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the connection profile should reside. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#project DatabaseMigrationServiceConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.connectionProfileId"></a>

- *Type:* java.lang.String

The ID of the connection profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#connection_profile_id DatabaseMigrationServiceConnectionProfile#connection_profile_id}

---

##### `alloydb`<sup>Optional</sup> <a name="alloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.alloydb"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

alloydb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#alloydb DatabaseMigrationServiceConnectionProfile#alloydb}

---

##### `cloudsql`<sup>Optional</sup> <a name="cloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.cloudsql"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

cloudsql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#cloudsql DatabaseMigrationServiceConnectionProfile#cloudsql}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The connection profile display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#display_name DatabaseMigrationServiceConnectionProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the connection profile should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#location DatabaseMigrationServiceConnectionProfile#location}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.mysql"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#mysql DatabaseMigrationServiceConnectionProfile#mysql}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.oracle"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#oracle DatabaseMigrationServiceConnectionProfile#oracle}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.postgresql"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#postgresql DatabaseMigrationServiceConnectionProfile#postgresql}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#project DatabaseMigrationServiceConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#timeouts DatabaseMigrationServiceConnectionProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putAlloydb">putAlloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putCloudsql">putCloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putMysql">putMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putOracle">putOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putPostgresql">putPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetAlloydb">resetAlloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetCloudsql">resetCloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetMysql">resetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOracle">resetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetPostgresql">resetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlloydb` <a name="putAlloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putAlloydb"></a>

```java
public void putAlloydb(DatabaseMigrationServiceConnectionProfileAlloydb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putAlloydb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

---

##### `putCloudsql` <a name="putCloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putCloudsql"></a>

```java
public void putCloudsql(DatabaseMigrationServiceConnectionProfileCloudsql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putCloudsql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

---

##### `putMysql` <a name="putMysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putMysql"></a>

```java
public void putMysql(DatabaseMigrationServiceConnectionProfileMysql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

---

##### `putOracle` <a name="putOracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putOracle"></a>

```java
public void putOracle(DatabaseMigrationServiceConnectionProfileOracle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

---

##### `putPostgresql` <a name="putPostgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putPostgresql"></a>

```java
public void putPostgresql(DatabaseMigrationServiceConnectionProfilePostgresql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putTimeouts"></a>

```java
public void putTimeouts(DatabaseMigrationServiceConnectionProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a>

---

##### `resetAlloydb` <a name="resetAlloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetAlloydb"></a>

```java
public void resetAlloydb()
```

##### `resetCloudsql` <a name="resetCloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetCloudsql"></a>

```java
public void resetCloudsql()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMysql` <a name="resetMysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetMysql"></a>

```java
public void resetMysql()
```

##### `resetOracle` <a name="resetOracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOracle"></a>

```java
public void resetOracle()
```

##### `resetPostgresql` <a name="resetPostgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetPostgresql"></a>

```java
public void resetPostgresql()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationServiceConnectionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfile;

DatabaseMigrationServiceConnectionProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfile;

DatabaseMigrationServiceConnectionProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfile;

DatabaseMigrationServiceConnectionProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfile;

DatabaseMigrationServiceConnectionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseMigrationServiceConnectionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseMigrationServiceConnectionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseMigrationServiceConnectionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseMigrationServiceConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServiceConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydb">alloydb</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsql">cloudsql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dbprovider">dbprovider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList">DatabaseMigrationServiceConnectionProfileErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference">DatabaseMigrationServiceConnectionProfileMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference">DatabaseMigrationServiceConnectionProfileOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference">DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydbInput">alloydbInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsqlInput">cloudsqlInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileIdInput">connectionProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysqlInput">mysqlInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracleInput">oracleInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresqlInput">postgresqlInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileId">connectionProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alloydb`<sup>Required</sup> <a name="alloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydb"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbOutputReference getAlloydb();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbOutputReference</a>

---

##### `cloudsql`<sup>Required</sup> <a name="cloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsql"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference getCloudsql();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dbprovider`<sup>Required</sup> <a name="dbprovider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dbprovider"></a>

```java
public java.lang.String getDbprovider();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.error"></a>

```java
public DatabaseMigrationServiceConnectionProfileErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList">DatabaseMigrationServiceConnectionProfileErrorList</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysql"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysqlOutputReference getMysql();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference">DatabaseMigrationServiceConnectionProfileMysqlOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracle"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleOutputReference getOracle();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference">DatabaseMigrationServiceConnectionProfileOracleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresql"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference getPostgresql();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeouts"></a>

```java
public DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference">DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference</a>

---

##### `alloydbInput`<sup>Optional</sup> <a name="alloydbInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydbInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydb getAlloydbInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

---

##### `cloudsqlInput`<sup>Optional</sup> <a name="cloudsqlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsqlInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsql getCloudsqlInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

---

##### `connectionProfileIdInput`<sup>Optional</sup> <a name="connectionProfileIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileIdInput"></a>

```java
public java.lang.String getConnectionProfileIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mysqlInput`<sup>Optional</sup> <a name="mysqlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysqlInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysql getMysqlInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

---

##### `oracleInput`<sup>Optional</sup> <a name="oracleInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracleInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracle getOracleInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

---

##### `postgresqlInput`<sup>Optional</sup> <a name="postgresqlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresqlInput"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresql getPostgresqlInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileId"></a>

```java
public java.lang.String getConnectionProfileId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServiceConnectionProfileAlloydb <a name="DatabaseMigrationServiceConnectionProfileAlloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydb;

DatabaseMigrationServiceConnectionProfileAlloydb.builder()
    .clusterId(java.lang.String)
//  .settings(DatabaseMigrationServiceConnectionProfileAlloydbSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Required. The AlloyDB cluster ID that this connection profile is associated with. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | settings block. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Required. The AlloyDB cluster ID that this connection profile is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#cluster_id DatabaseMigrationServiceConnectionProfile#cluster_id}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.settings"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#settings DatabaseMigrationServiceConnectionProfile#settings}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettings <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettings;

DatabaseMigrationServiceConnectionProfileAlloydbSettings.builder()
    .initialUser(DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser)
    .vpcNetwork(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .primaryInstanceSettings(DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.initialUser">initialUser</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.vpcNetwork">vpcNetwork</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for the AlloyDB cluster created by DMS. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.primaryInstanceSettings">primaryInstanceSettings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | primary_instance_settings block. |

---

##### `initialUser`<sup>Required</sup> <a name="initialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.initialUser"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser getInitialUser();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#initial_user DatabaseMigrationServiceConnectionProfile#initial_user}

---

##### `vpcNetwork`<sup>Required</sup> <a name="vpcNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.vpcNetwork"></a>

```java
public java.lang.String getVpcNetwork();
```

- *Type:* java.lang.String

Required.

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#vpc_network DatabaseMigrationServiceConnectionProfile#vpc_network}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for the AlloyDB cluster created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}

---

##### `primaryInstanceSettings`<sup>Optional</sup> <a name="primaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.primaryInstanceSettings"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings getPrimaryInstanceSettings();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

primary_instance_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#primary_instance_settings DatabaseMigrationServiceConnectionProfile#primary_instance_settings}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser;

DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.builder()
    .password(java.lang.String)
    .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.password">password</a></code> | <code>java.lang.String</code> | The initial password for the user. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.user">user</a></code> | <code>java.lang.String</code> | The database username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#user DatabaseMigrationServiceConnectionProfile#user}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings;

DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.builder()
    .id(java.lang.String)
    .machineConfig(DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig)
//  .databaseFlags(java.util.Map<java.lang.String, java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.id">id</a></code> | <code>java.lang.String</code> | The database username. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.databaseFlags">databaseFlags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for the AlloyDB primary instance created by DMS. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machineConfig`<sup>Required</sup> <a name="machineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.machineConfig"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig getMachineConfig();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#machine_config DatabaseMigrationServiceConnectionProfile#machine_config}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.databaseFlags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances.

See the AlloyDB documentation for how these can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#database_flags DatabaseMigrationServiceConnectionProfile#database_flags}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for the AlloyDB primary instance created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig;

DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.builder()
    .cpuCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | The number of CPU's in the VM instance. |

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#cpu_count DatabaseMigrationServiceConnectionProfile#cpu_count}

---

### DatabaseMigrationServiceConnectionProfileCloudsql <a name="DatabaseMigrationServiceConnectionProfileCloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsql;

DatabaseMigrationServiceConnectionProfileCloudsql.builder()
//  .settings(DatabaseMigrationServiceConnectionProfileCloudsqlSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | settings block. |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql.property.settings"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#settings DatabaseMigrationServiceConnectionProfile#settings}

---

### DatabaseMigrationServiceConnectionProfileCloudsqlSettings <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings;

DatabaseMigrationServiceConnectionProfileCloudsqlSettings.builder()
    .sourceId(java.lang.String)
//  .activationPolicy(java.lang.String)
//  .autoStorageIncrease(java.lang.Boolean)
//  .autoStorageIncrease(IResolvable)
//  .cmekKeyName(java.lang.String)
//  .collation(java.lang.String)
//  .databaseFlags(java.util.Map<java.lang.String, java.lang.String>)
//  .databaseVersion(java.lang.String)
//  .dataDiskSizeGb(java.lang.String)
//  .dataDiskType(java.lang.String)
//  .edition(java.lang.String)
//  .ipConfig(DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig)
//  .rootPassword(java.lang.String)
//  .storageAutoResizeLimit(java.lang.String)
//  .tier(java.lang.String)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.activationPolicy">activationPolicy</a></code> | <code>java.lang.String</code> | The activation policy specifies when the instance is activated; |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.autoStorageIncrease">autoStorageIncrease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If you enable this setting, Cloud SQL checks your available storage every 30 seconds. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.cmekKeyName">cmekKeyName</a></code> | <code>java.lang.String</code> | The KMS key name used for the csql instance. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.collation">collation</a></code> | <code>java.lang.String</code> | The Cloud SQL default instance level collation. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseFlags">databaseFlags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The database flags passed to the Cloud SQL instance at startup. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | The database engine type and version. Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>java.lang.String</code> | The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskType">dataDiskType</a></code> | <code>java.lang.String</code> | The type of storage. Possible values: ["PD_SSD", "PD_HDD"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.edition">edition</a></code> | <code>java.lang.String</code> | The edition of the given Cloud SQL instance. Possible values: ["ENTERPRISE", "ENTERPRISE_PLUS"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.ipConfig">ipConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | ip_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.rootPassword">rootPassword</a></code> | <code>java.lang.String</code> | Input only. Initial root password. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.storageAutoResizeLimit">storageAutoResizeLimit</a></code> | <code>java.lang.String</code> | The maximum size to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.tier">tier</a></code> | <code>java.lang.String</code> | The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances). |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.zone">zone</a></code> | <code>java.lang.String</code> | The Google Cloud Platform zone where your Cloud SQL datdabse instance is located. |

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#source_id DatabaseMigrationServiceConnectionProfile#source_id}

---

##### `activationPolicy`<sup>Optional</sup> <a name="activationPolicy" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.activationPolicy"></a>

```java
public java.lang.String getActivationPolicy();
```

- *Type:* java.lang.String

The activation policy specifies when the instance is activated;

it is applicable only when the instance state is 'RUNNABLE'. Possible values: ["ALWAYS", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#activation_policy DatabaseMigrationServiceConnectionProfile#activation_policy}

---

##### `autoStorageIncrease`<sup>Optional</sup> <a name="autoStorageIncrease" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.autoStorageIncrease"></a>

```java
public java.lang.Object getAutoStorageIncrease();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If you enable this setting, Cloud SQL checks your available storage every 30 seconds.

If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity.
If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#auto_storage_increase DatabaseMigrationServiceConnectionProfile#auto_storage_increase}

---

##### `cmekKeyName`<sup>Optional</sup> <a name="cmekKeyName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.cmekKeyName"></a>

```java
public java.lang.String getCmekKeyName();
```

- *Type:* java.lang.String

The KMS key name used for the csql instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#cmek_key_name DatabaseMigrationServiceConnectionProfile#cmek_key_name}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

The Cloud SQL default instance level collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#collation DatabaseMigrationServiceConnectionProfile#collation}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseFlags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The database flags passed to the Cloud SQL instance at startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#database_flags DatabaseMigrationServiceConnectionProfile#database_flags}

---

##### `databaseVersion`<sup>Optional</sup> <a name="databaseVersion" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

The database engine type and version. Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#database_version DatabaseMigrationServiceConnectionProfile#database_version}

---

##### `dataDiskSizeGb`<sup>Optional</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskSizeGb"></a>

```java
public java.lang.String getDataDiskSizeGb();
```

- *Type:* java.lang.String

The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#data_disk_size_gb DatabaseMigrationServiceConnectionProfile#data_disk_size_gb}

---

##### `dataDiskType`<sup>Optional</sup> <a name="dataDiskType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskType"></a>

```java
public java.lang.String getDataDiskType();
```

- *Type:* java.lang.String

The type of storage. Possible values: ["PD_SSD", "PD_HDD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#data_disk_type DatabaseMigrationServiceConnectionProfile#data_disk_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

The edition of the given Cloud SQL instance. Possible values: ["ENTERPRISE", "ENTERPRISE_PLUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#edition DatabaseMigrationServiceConnectionProfile#edition}

---

##### `ipConfig`<sup>Optional</sup> <a name="ipConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.ipConfig"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig getIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ip_config DatabaseMigrationServiceConnectionProfile#ip_config}

---

##### `rootPassword`<sup>Optional</sup> <a name="rootPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.rootPassword"></a>

```java
public java.lang.String getRootPassword();
```

- *Type:* java.lang.String

Input only. Initial root password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#root_password DatabaseMigrationServiceConnectionProfile#root_password}

---

##### `storageAutoResizeLimit`<sup>Optional</sup> <a name="storageAutoResizeLimit" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.storageAutoResizeLimit"></a>

```java
public java.lang.String getStorageAutoResizeLimit();
```

- *Type:* java.lang.String

The maximum size to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#storage_auto_resize_limit DatabaseMigrationServiceConnectionProfile#storage_auto_resize_limit}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances).

For more information, see https://cloud.google.com/sql/docs/mysql/instance-settings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#tier DatabaseMigrationServiceConnectionProfile#tier}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#user_labels DatabaseMigrationServiceConnectionProfile#user_labels}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The Google Cloud Platform zone where your Cloud SQL datdabse instance is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#zone DatabaseMigrationServiceConnectionProfile#zone}

---

### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig;

DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.builder()
//  .authorizedNetworks(IResolvable)
//  .authorizedNetworks(java.util.List<DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks>)
//  .enableIpv4(java.lang.Boolean)
//  .enableIpv4(IResolvable)
//  .privateNetwork(java.lang.String)
//  .requireSsl(java.lang.Boolean)
//  .requireSsl(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.authorizedNetworks">authorizedNetworks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>></code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.enableIpv4">enableIpv4</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the instance should be assigned an IPv4 address or not. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.privateNetwork">privateNetwork</a></code> | <code>java.lang.String</code> | The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.requireSsl">requireSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether SSL connections over IP should be enforced or not. |

---

##### `authorizedNetworks`<sup>Optional</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.authorizedNetworks"></a>

```java
public java.lang.Object getAuthorizedNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>>

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#authorized_networks DatabaseMigrationServiceConnectionProfile#authorized_networks}

---

##### `enableIpv4`<sup>Optional</sup> <a name="enableIpv4" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.enableIpv4"></a>

```java
public java.lang.Object getEnableIpv4();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the instance should be assigned an IPv4 address or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#enable_ipv4 DatabaseMigrationServiceConnectionProfile#enable_ipv4}

---

##### `privateNetwork`<sup>Optional</sup> <a name="privateNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.privateNetwork"></a>

```java
public java.lang.String getPrivateNetwork();
```

- *Type:* java.lang.String

The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default.
This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#private_network DatabaseMigrationServiceConnectionProfile#private_network}

---

##### `requireSsl`<sup>Optional</sup> <a name="requireSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.requireSsl"></a>

```java
public java.lang.Object getRequireSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether SSL connections over IP should be enforced or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#require_ssl DatabaseMigrationServiceConnectionProfile#require_ssl}

---

### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks;

DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.builder()
    .value(java.lang.String)
//  .expireTime(java.lang.String)
//  .label(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.value">value</a></code> | <code>java.lang.String</code> | The allowlisted value for the access control list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The time when this access control entry expires in RFC 3339 format. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.label">label</a></code> | <code>java.lang.String</code> | A label to identify this entry. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Input only. The time-to-leave of this access control entry. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The allowlisted value for the access control list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#value DatabaseMigrationServiceConnectionProfile#value}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

The time when this access control entry expires in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#expire_time DatabaseMigrationServiceConnectionProfile#expire_time}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

A label to identify this entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#label DatabaseMigrationServiceConnectionProfile#label}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Input only. The time-to-leave of this access control entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ttl DatabaseMigrationServiceConnectionProfile#ttl}

---

### DatabaseMigrationServiceConnectionProfileConfig <a name="DatabaseMigrationServiceConnectionProfileConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileConfig;

DatabaseMigrationServiceConnectionProfileConfig.builder()
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
    .connectionProfileId(java.lang.String)
//  .alloydb(DatabaseMigrationServiceConnectionProfileAlloydb)
//  .cloudsql(DatabaseMigrationServiceConnectionProfileCloudsql)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .mysql(DatabaseMigrationServiceConnectionProfileMysql)
//  .oracle(DatabaseMigrationServiceConnectionProfileOracle)
//  .postgresql(DatabaseMigrationServiceConnectionProfilePostgresql)
//  .project(java.lang.String)
//  .timeouts(DatabaseMigrationServiceConnectionProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connectionProfileId">connectionProfileId</a></code> | <code>java.lang.String</code> | The ID of the connection profile. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.alloydb">alloydb</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a></code> | alloydb block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.cloudsql">cloudsql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a></code> | cloudsql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The connection profile display name. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the connection profile should reside. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#project DatabaseMigrationServiceConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connectionProfileId"></a>

```java
public java.lang.String getConnectionProfileId();
```

- *Type:* java.lang.String

The ID of the connection profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#connection_profile_id DatabaseMigrationServiceConnectionProfile#connection_profile_id}

---

##### `alloydb`<sup>Optional</sup> <a name="alloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.alloydb"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydb getAlloydb();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

alloydb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#alloydb DatabaseMigrationServiceConnectionProfile#alloydb}

---

##### `cloudsql`<sup>Optional</sup> <a name="cloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.cloudsql"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsql getCloudsql();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

cloudsql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#cloudsql DatabaseMigrationServiceConnectionProfile#cloudsql}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The connection profile display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#display_name DatabaseMigrationServiceConnectionProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the connection profile should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#location DatabaseMigrationServiceConnectionProfile#location}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.mysql"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysql getMysql();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#mysql DatabaseMigrationServiceConnectionProfile#mysql}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.oracle"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracle getOracle();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#oracle DatabaseMigrationServiceConnectionProfile#oracle}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.postgresql"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresql getPostgresql();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#postgresql DatabaseMigrationServiceConnectionProfile#postgresql}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#project DatabaseMigrationServiceConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.timeouts"></a>

```java
public DatabaseMigrationServiceConnectionProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#timeouts DatabaseMigrationServiceConnectionProfile#timeouts}

---

### DatabaseMigrationServiceConnectionProfileError <a name="DatabaseMigrationServiceConnectionProfileError" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileError;

DatabaseMigrationServiceConnectionProfileError.builder()
    .build();
```


### DatabaseMigrationServiceConnectionProfileMysql <a name="DatabaseMigrationServiceConnectionProfileMysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileMysql;

DatabaseMigrationServiceConnectionProfileMysql.builder()
    .host(java.lang.String)
    .password(java.lang.String)
    .port(java.lang.Number)
    .username(java.lang.String)
//  .cloudSqlId(java.lang.String)
//  .ssl(DatabaseMigrationServiceConnectionProfileMysqlSsl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.host">host</a></code> | <code>java.lang.String</code> | Required. The IP or hostname of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.password">password</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.port">port</a></code> | <code>java.lang.Number</code> | Required. The network port of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.username">username</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.cloudSqlId">cloudSqlId</a></code> | <code>java.lang.String</code> | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | ssl block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `cloudSqlId`<sup>Optional</sup> <a name="cloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.cloudSqlId"></a>

```java
public java.lang.String getCloudSqlId();
```

- *Type:* java.lang.String

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#cloud_sql_id DatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.ssl"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysqlSsl getSsl();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}

---

### DatabaseMigrationServiceConnectionProfileMysqlSsl <a name="DatabaseMigrationServiceConnectionProfileMysqlSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileMysqlSsl;

DatabaseMigrationServiceConnectionProfileMysqlSsl.builder()
    .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}

---

### DatabaseMigrationServiceConnectionProfileOracle <a name="DatabaseMigrationServiceConnectionProfileOracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracle;

DatabaseMigrationServiceConnectionProfileOracle.builder()
    .databaseService(java.lang.String)
    .host(java.lang.String)
    .password(java.lang.String)
    .port(java.lang.Number)
    .username(java.lang.String)
//  .forwardSshConnectivity(DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity)
//  .privateConnectivity(DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity)
//  .ssl(DatabaseMigrationServiceConnectionProfileOracleSsl)
//  .staticServiceIpConnectivity(DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.databaseService">databaseService</a></code> | <code>java.lang.String</code> | Required. Database service for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.host">host</a></code> | <code>java.lang.String</code> | Required. The IP or hostname of the source Oracle database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.password">password</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.port">port</a></code> | <code>java.lang.Number</code> | Required. The network port of the source Oracle database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.username">username</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a></code> | ssl block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.staticServiceIpConnectivity">staticServiceIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a></code> | static_service_ip_connectivity block. |

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.databaseService"></a>

```java
public java.lang.String getDatabaseService();
```

- *Type:* java.lang.String

Required. Database service for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#database_service DatabaseMigrationServiceConnectionProfile#database_service}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Required. The IP or hostname of the source Oracle database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Required. The network port of the source Oracle database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `forwardSshConnectivity`<sup>Optional</sup> <a name="forwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.forwardSshConnectivity"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity getForwardSshConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#forward_ssh_connectivity DatabaseMigrationServiceConnectionProfile#forward_ssh_connectivity}

---

##### `privateConnectivity`<sup>Optional</sup> <a name="privateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.privateConnectivity"></a>

```java
public DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity getPrivateConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#private_connectivity DatabaseMigrationServiceConnectionProfile#private_connectivity}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.ssl"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleSsl getSsl();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}

---

##### `staticServiceIpConnectivity`<sup>Optional</sup> <a name="staticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.staticServiceIpConnectivity"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity getStaticServiceIpConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

static_service_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#static_service_ip_connectivity DatabaseMigrationServiceConnectionProfile#static_service_ip_connectivity}

---

### DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity <a name="DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity;

DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.builder()
    .hostname(java.lang.String)
    .port(java.lang.Number)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .privateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Required. Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.port">port</a></code> | <code>java.lang.Number</code> | Port for the SSH tunnel, default value is 22. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.username">username</a></code> | <code>java.lang.String</code> | Required. Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.password">password</a></code> | <code>java.lang.String</code> | Input only. SSH password. Only one of 'password' and 'private_key' can be configured. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Input only. SSH private key. Only one of 'password' and 'private_key' can be configured. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Required. Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#hostname DatabaseMigrationServiceConnectionProfile#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port for the SSH tunnel, default value is 22.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Required. Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Input only. SSH password. Only one of 'password' and 'private_key' can be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Input only. SSH private key. Only one of 'password' and 'private_key' can be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#private_key DatabaseMigrationServiceConnectionProfile#private_key}

---

### DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity <a name="DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity;

DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity.builder()
    .privateConnection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity.property.privateConnection">privateConnection</a></code> | <code>java.lang.String</code> | Required. The resource name (URI) of the private connection. |

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity.property.privateConnection"></a>

```java
public java.lang.String getPrivateConnection();
```

- *Type:* java.lang.String

Required. The resource name (URI) of the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#private_connection DatabaseMigrationServiceConnectionProfile#private_connection}

---

### DatabaseMigrationServiceConnectionProfileOracleSsl <a name="DatabaseMigrationServiceConnectionProfileOracleSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracleSsl;

DatabaseMigrationServiceConnectionProfileOracleSsl.builder()
    .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}

---

### DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity <a name="DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity;

DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity.builder()
    .build();
```


### DatabaseMigrationServiceConnectionProfilePostgresql <a name="DatabaseMigrationServiceConnectionProfilePostgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfilePostgresql;

DatabaseMigrationServiceConnectionProfilePostgresql.builder()
    .host(java.lang.String)
    .password(java.lang.String)
    .port(java.lang.Number)
    .username(java.lang.String)
//  .cloudSqlId(java.lang.String)
//  .ssl(DatabaseMigrationServiceConnectionProfilePostgresqlSsl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.host">host</a></code> | <code>java.lang.String</code> | Required. The IP or hostname of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.password">password</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.port">port</a></code> | <code>java.lang.Number</code> | Required. The network port of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.username">username</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.cloudSqlId">cloudSqlId</a></code> | <code>java.lang.String</code> | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | ssl block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `cloudSqlId`<sup>Optional</sup> <a name="cloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.cloudSqlId"></a>

```java
public java.lang.String getCloudSqlId();
```

- *Type:* java.lang.String

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#cloud_sql_id DatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.ssl"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresqlSsl getSsl();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}

---

### DatabaseMigrationServiceConnectionProfilePostgresqlSsl <a name="DatabaseMigrationServiceConnectionProfilePostgresqlSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl;

DatabaseMigrationServiceConnectionProfilePostgresqlSsl.builder()
    .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}

---

### DatabaseMigrationServiceConnectionProfileTimeouts <a name="DatabaseMigrationServiceConnectionProfileTimeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileTimeouts;

DatabaseMigrationServiceConnectionProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#create DatabaseMigrationServiceConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#delete DatabaseMigrationServiceConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#update DatabaseMigrationServiceConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#create DatabaseMigrationServiceConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#delete DatabaseMigrationServiceConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/database_migration_service_connection_profile#update DatabaseMigrationServiceConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServiceConnectionProfileAlloydbOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference;

new DatabaseMigrationServiceConnectionProfileAlloydbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings"></a>

```java
public void putSettings(DatabaseMigrationServiceConnectionProfileAlloydbSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settings"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settingsInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettings getSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference;

new DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordSet">passwordSet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordSet`<sup>Required</sup> <a name="passwordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordSet"></a>

```java
public IResolvable getPasswordSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference;

new DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser">putInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings">putPrimaryInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetPrimaryInstanceSettings">resetPrimaryInstanceSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitialUser` <a name="putInitialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser"></a>

```java
public void putInitialUser(DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---

##### `putPrimaryInstanceSettings` <a name="putPrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings"></a>

```java
public void putPrimaryInstanceSettings(DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPrimaryInstanceSettings` <a name="resetPrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetPrimaryInstanceSettings"></a>

```java
public void resetPrimaryInstanceSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUser">initialUser</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettings">primaryInstanceSettings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUserInput">initialUserInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettingsInput">primaryInstanceSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetworkInput">vpcNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetwork">vpcNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialUser`<sup>Required</sup> <a name="initialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUser"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference getInitialUser();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference</a>

---

##### `primaryInstanceSettings`<sup>Required</sup> <a name="primaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettings"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference getPrimaryInstanceSettings();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference</a>

---

##### `initialUserInput`<sup>Optional</sup> <a name="initialUserInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUserInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser getInitialUserInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `primaryInstanceSettingsInput`<sup>Optional</sup> <a name="primaryInstanceSettingsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettingsInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings getPrimaryInstanceSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---

##### `vpcNetworkInput`<sup>Optional</sup> <a name="vpcNetworkInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetworkInput"></a>

```java
public java.lang.String getVpcNetworkInput();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcNetwork`<sup>Required</sup> <a name="vpcNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetwork"></a>

```java
public java.lang.String getVpcNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference;

new DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCountInput">cpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCountInput`<sup>Optional</sup> <a name="cpuCountInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCountInput"></a>

```java
public java.lang.Number getCpuCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference;

new DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig">putMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetDatabaseFlags">resetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMachineConfig` <a name="putMachineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig"></a>

```java
public void putMachineConfig(DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---

##### `resetDatabaseFlags` <a name="resetDatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```java
public void resetDatabaseFlags()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlagsInput">databaseFlagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfigInput">machineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlags">databaseFlags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineConfig`<sup>Required</sup> <a name="machineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfig"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference getMachineConfig();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `databaseFlagsInput`<sup>Optional</sup> <a name="databaseFlagsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineConfigInput`<sup>Optional</sup> <a name="machineConfigInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfigInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig getMachineConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference;

new DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings"></a>

```java
public void putSettings(DatabaseMigrationServiceConnectionProfileCloudsqlSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.cloudSqlId">cloudSqlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSqlId`<sup>Required</sup> <a name="cloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.cloudSqlId"></a>

```java
public java.lang.String getCloudSqlId();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settings"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference</a>

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settingsInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettings getSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList;

new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference;

new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference;

new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks">putAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetAuthorizedNetworks">resetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetEnableIpv4">resetEnableIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetPrivateNetwork">resetPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetRequireSsl">resetRequireSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizedNetworks` <a name="putAuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks"></a>

```java
public void putAuthorizedNetworks(IResolvable OR java.util.List<DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>>

---

##### `resetAuthorizedNetworks` <a name="resetAuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetAuthorizedNetworks"></a>

```java
public void resetAuthorizedNetworks()
```

##### `resetEnableIpv4` <a name="resetEnableIpv4" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetEnableIpv4"></a>

```java
public void resetEnableIpv4()
```

##### `resetPrivateNetwork` <a name="resetPrivateNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetPrivateNetwork"></a>

```java
public void resetPrivateNetwork()
```

##### `resetRequireSsl` <a name="resetRequireSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetRequireSsl"></a>

```java
public void resetRequireSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworks">authorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworksInput">authorizedNetworksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4Input">enableIpv4Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetworkInput">privateNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSslInput">requireSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4">enableIpv4</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetwork">privateNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSsl">requireSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedNetworks`<sup>Required</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworks"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList getAuthorizedNetworks();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList</a>

---

##### `authorizedNetworksInput`<sup>Optional</sup> <a name="authorizedNetworksInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworksInput"></a>

```java
public java.lang.Object getAuthorizedNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>>

---

##### `enableIpv4Input`<sup>Optional</sup> <a name="enableIpv4Input" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4Input"></a>

```java
public java.lang.Object getEnableIpv4Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateNetworkInput`<sup>Optional</sup> <a name="privateNetworkInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetworkInput"></a>

```java
public java.lang.String getPrivateNetworkInput();
```

- *Type:* java.lang.String

---

##### `requireSslInput`<sup>Optional</sup> <a name="requireSslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSslInput"></a>

```java
public java.lang.Object getRequireSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIpv4`<sup>Required</sup> <a name="enableIpv4" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4"></a>

```java
public java.lang.Object getEnableIpv4();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateNetwork`<sup>Required</sup> <a name="privateNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetwork"></a>

```java
public java.lang.String getPrivateNetwork();
```

- *Type:* java.lang.String

---

##### `requireSsl`<sup>Required</sup> <a name="requireSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSsl"></a>

```java
public java.lang.Object getRequireSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference;

new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig">putIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetActivationPolicy">resetActivationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetAutoStorageIncrease">resetAutoStorageIncrease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCmekKeyName">resetCmekKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseFlags">resetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseVersion">resetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskSizeGb">resetDataDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskType">resetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetIpConfig">resetIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetRootPassword">resetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetStorageAutoResizeLimit">resetStorageAutoResizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetUserLabels">resetUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpConfig` <a name="putIpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig"></a>

```java
public void putIpConfig(DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---

##### `resetActivationPolicy` <a name="resetActivationPolicy" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetActivationPolicy"></a>

```java
public void resetActivationPolicy()
```

##### `resetAutoStorageIncrease` <a name="resetAutoStorageIncrease" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetAutoStorageIncrease"></a>

```java
public void resetAutoStorageIncrease()
```

##### `resetCmekKeyName` <a name="resetCmekKeyName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCmekKeyName"></a>

```java
public void resetCmekKeyName()
```

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCollation"></a>

```java
public void resetCollation()
```

##### `resetDatabaseFlags` <a name="resetDatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseFlags"></a>

```java
public void resetDatabaseFlags()
```

##### `resetDatabaseVersion` <a name="resetDatabaseVersion" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseVersion"></a>

```java
public void resetDatabaseVersion()
```

##### `resetDataDiskSizeGb` <a name="resetDataDiskSizeGb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskSizeGb"></a>

```java
public void resetDataDiskSizeGb()
```

##### `resetDataDiskType` <a name="resetDataDiskType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskType"></a>

```java
public void resetDataDiskType()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetIpConfig` <a name="resetIpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetIpConfig"></a>

```java
public void resetIpConfig()
```

##### `resetRootPassword` <a name="resetRootPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetRootPassword"></a>

```java
public void resetRootPassword()
```

##### `resetStorageAutoResizeLimit` <a name="resetStorageAutoResizeLimit" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetStorageAutoResizeLimit"></a>

```java
public void resetStorageAutoResizeLimit()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetTier"></a>

```java
public void resetTier()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetUserLabels"></a>

```java
public void resetUserLabels()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfig">ipConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordSet">rootPasswordSet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicyInput">activationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncreaseInput">autoStorageIncreaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyNameInput">cmekKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collationInput">collationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlagsInput">databaseFlagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersionInput">databaseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGbInput">dataDiskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskTypeInput">dataDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfigInput">ipConfigInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordInput">rootPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimitInput">storageAutoResizeLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicy">activationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncrease">autoStorageIncrease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyName">cmekKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlags">databaseFlags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskType">dataDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPassword">rootPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimit">storageAutoResizeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipConfig`<sup>Required</sup> <a name="ipConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfig"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference getIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference</a>

---

##### `rootPasswordSet`<sup>Required</sup> <a name="rootPasswordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordSet"></a>

```java
public IResolvable getRootPasswordSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `activationPolicyInput`<sup>Optional</sup> <a name="activationPolicyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicyInput"></a>

```java
public java.lang.String getActivationPolicyInput();
```

- *Type:* java.lang.String

---

##### `autoStorageIncreaseInput`<sup>Optional</sup> <a name="autoStorageIncreaseInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncreaseInput"></a>

```java
public java.lang.Object getAutoStorageIncreaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cmekKeyNameInput`<sup>Optional</sup> <a name="cmekKeyNameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyNameInput"></a>

```java
public java.lang.String getCmekKeyNameInput();
```

- *Type:* java.lang.String

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collationInput"></a>

```java
public java.lang.String getCollationInput();
```

- *Type:* java.lang.String

---

##### `databaseFlagsInput`<sup>Optional</sup> <a name="databaseFlagsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersionInput"></a>

```java
public java.lang.String getDatabaseVersionInput();
```

- *Type:* java.lang.String

---

##### `dataDiskSizeGbInput`<sup>Optional</sup> <a name="dataDiskSizeGbInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGbInput"></a>

```java
public java.lang.String getDataDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `dataDiskTypeInput`<sup>Optional</sup> <a name="dataDiskTypeInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskTypeInput"></a>

```java
public java.lang.String getDataDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `ipConfigInput`<sup>Optional</sup> <a name="ipConfigInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfigInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig getIpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---

##### `rootPasswordInput`<sup>Optional</sup> <a name="rootPasswordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordInput"></a>

```java
public java.lang.String getRootPasswordInput();
```

- *Type:* java.lang.String

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceIdInput"></a>

```java
public java.lang.String getSourceIdInput();
```

- *Type:* java.lang.String

---

##### `storageAutoResizeLimitInput`<sup>Optional</sup> <a name="storageAutoResizeLimitInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimitInput"></a>

```java
public java.lang.String getStorageAutoResizeLimitInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `activationPolicy`<sup>Required</sup> <a name="activationPolicy" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicy"></a>

```java
public java.lang.String getActivationPolicy();
```

- *Type:* java.lang.String

---

##### `autoStorageIncrease`<sup>Required</sup> <a name="autoStorageIncrease" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncrease"></a>

```java
public java.lang.Object getAutoStorageIncrease();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cmekKeyName`<sup>Required</sup> <a name="cmekKeyName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyName"></a>

```java
public java.lang.String getCmekKeyName();
```

- *Type:* java.lang.String

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `dataDiskSizeGb`<sup>Required</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGb"></a>

```java
public java.lang.String getDataDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `dataDiskType`<sup>Required</sup> <a name="dataDiskType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskType"></a>

```java
public java.lang.String getDataDiskType();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `rootPassword`<sup>Required</sup> <a name="rootPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPassword"></a>

```java
public java.lang.String getRootPassword();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `storageAutoResizeLimit`<sup>Required</sup> <a name="storageAutoResizeLimit" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimit"></a>

```java
public java.lang.String getStorageAutoResizeLimit();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileCloudsqlSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---


### DatabaseMigrationServiceConnectionProfileErrorList <a name="DatabaseMigrationServiceConnectionProfileErrorList" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileErrorList;

new DatabaseMigrationServiceConnectionProfileErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.get"></a>

```java
public DatabaseMigrationServiceConnectionProfileErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseMigrationServiceConnectionProfileErrorOutputReference <a name="DatabaseMigrationServiceConnectionProfileErrorOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileErrorOutputReference;

new DatabaseMigrationServiceConnectionProfileErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.details">details</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError">DatabaseMigrationServiceConnectionProfileError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError">DatabaseMigrationServiceConnectionProfileError</a>

---


### DatabaseMigrationServiceConnectionProfileMysqlOutputReference <a name="DatabaseMigrationServiceConnectionProfileMysqlOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference;

new DatabaseMigrationServiceConnectionProfileMysqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl">putSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetCloudSqlId">resetCloudSqlId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetSsl">resetSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsl` <a name="putSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl"></a>

```java
public void putSsl(DatabaseMigrationServiceConnectionProfileMysqlSsl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---

##### `resetCloudSqlId` <a name="resetCloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetCloudSqlId"></a>

```java
public void resetCloudSqlId()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetSsl"></a>

```java
public void resetSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordSet">passwordSet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference">DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlIdInput">cloudSqlIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.sslInput">sslInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlId">cloudSqlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordSet`<sup>Required</sup> <a name="passwordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordSet"></a>

```java
public IResolvable getPasswordSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.ssl"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference getSsl();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference">DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference</a>

---

##### `cloudSqlIdInput`<sup>Optional</sup> <a name="cloudSqlIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlIdInput"></a>

```java
public java.lang.String getCloudSqlIdInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.sslInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysqlSsl getSslInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `cloudSqlId`<sup>Required</sup> <a name="cloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlId"></a>

```java
public java.lang.String getCloudSqlId();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

---


### DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference <a name="DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference;

new DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileMysqlSsl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---


### DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference;

new DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

---


### DatabaseMigrationServiceConnectionProfileOracleOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracleOutputReference;

new DatabaseMigrationServiceConnectionProfileOracleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putForwardSshConnectivity">putForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putPrivateConnectivity">putPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putSsl">putSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putStaticServiceIpConnectivity">putStaticServiceIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetForwardSshConnectivity">resetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetPrivateConnectivity">resetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetStaticServiceIpConnectivity">resetStaticServiceIpConnectivity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardSshConnectivity` <a name="putForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putForwardSshConnectivity"></a>

```java
public void putForwardSshConnectivity(DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

---

##### `putPrivateConnectivity` <a name="putPrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putPrivateConnectivity"></a>

```java
public void putPrivateConnectivity(DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

---

##### `putSsl` <a name="putSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putSsl"></a>

```java
public void putSsl(DatabaseMigrationServiceConnectionProfileOracleSsl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

---

##### `putStaticServiceIpConnectivity` <a name="putStaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putStaticServiceIpConnectivity"></a>

```java
public void putStaticServiceIpConnectivity(DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putStaticServiceIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

---

##### `resetForwardSshConnectivity` <a name="resetForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetForwardSshConnectivity"></a>

```java
public void resetForwardSshConnectivity()
```

##### `resetPrivateConnectivity` <a name="resetPrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetPrivateConnectivity"></a>

```java
public void resetPrivateConnectivity()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetStaticServiceIpConnectivity` <a name="resetStaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetStaticServiceIpConnectivity"></a>

```java
public void resetStaticServiceIpConnectivity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordSet">passwordSet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference">DatabaseMigrationServiceConnectionProfileOracleSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivity">staticServiceIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseServiceInput">databaseServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivityInput">forwardSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivityInput">privateConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.sslInput">sslInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivityInput">staticServiceIpConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseService">databaseService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardSshConnectivity`<sup>Required</sup> <a name="forwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivity"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference getForwardSshConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference</a>

---

##### `passwordSet`<sup>Required</sup> <a name="passwordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordSet"></a>

```java
public IResolvable getPasswordSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `privateConnectivity`<sup>Required</sup> <a name="privateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivity"></a>

```java
public DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference getPrivateConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.ssl"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleSslOutputReference getSsl();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference">DatabaseMigrationServiceConnectionProfileOracleSslOutputReference</a>

---

##### `staticServiceIpConnectivity`<sup>Required</sup> <a name="staticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivity"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference getStaticServiceIpConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference</a>

---

##### `databaseServiceInput`<sup>Optional</sup> <a name="databaseServiceInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseServiceInput"></a>

```java
public java.lang.String getDatabaseServiceInput();
```

- *Type:* java.lang.String

---

##### `forwardSshConnectivityInput`<sup>Optional</sup> <a name="forwardSshConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivityInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity getForwardSshConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `privateConnectivityInput`<sup>Optional</sup> <a name="privateConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivityInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity getPrivateConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.sslInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleSsl getSslInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

---

##### `staticServiceIpConnectivityInput`<sup>Optional</sup> <a name="staticServiceIpConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivityInput"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity getStaticServiceIpConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseService"></a>

```java
public java.lang.String getDatabaseService();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

---


### DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference <a name="DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference;

new DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnectionInput">privateConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnection">privateConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateConnectionInput`<sup>Optional</sup> <a name="privateConnectionInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```java
public java.lang.String getPrivateConnectionInput();
```

- *Type:* java.lang.String

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnection"></a>

```java
public java.lang.String getPrivateConnection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

---


### DatabaseMigrationServiceConnectionProfileOracleSslOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleSslOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference;

new DatabaseMigrationServiceConnectionProfileOracleSslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleSsl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

---


### DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference;

new DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

---


### DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference <a name="DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference;

new DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl">putSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetCloudSqlId">resetCloudSqlId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetSsl">resetSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsl` <a name="putSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl"></a>

```java
public void putSsl(DatabaseMigrationServiceConnectionProfilePostgresqlSsl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---

##### `resetCloudSqlId` <a name="resetCloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetCloudSqlId"></a>

```java
public void resetCloudSqlId()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetSsl"></a>

```java
public void resetSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.networkArchitecture">networkArchitecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordSet">passwordSet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlIdInput">cloudSqlIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.sslInput">sslInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlId">cloudSqlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkArchitecture`<sup>Required</sup> <a name="networkArchitecture" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.networkArchitecture"></a>

```java
public java.lang.String getNetworkArchitecture();
```

- *Type:* java.lang.String

---

##### `passwordSet`<sup>Required</sup> <a name="passwordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordSet"></a>

```java
public IResolvable getPasswordSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.ssl"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference getSsl();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference</a>

---

##### `cloudSqlIdInput`<sup>Optional</sup> <a name="cloudSqlIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlIdInput"></a>

```java
public java.lang.String getCloudSqlIdInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.sslInput"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresqlSsl getSslInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `cloudSqlId`<sup>Required</sup> <a name="cloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlId"></a>

```java
public java.lang.String getCloudSqlId();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

---


### DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference <a name="DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference;

new DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceConnectionProfilePostgresqlSsl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---


### DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference <a name="DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_connection_profile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference;

new DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a>

---



