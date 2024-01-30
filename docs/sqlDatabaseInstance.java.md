# `sqlDatabaseInstance` Submodule <a name="`sqlDatabaseInstance` Submodule" id="@cdktf/provider-google.sqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlDatabaseInstance <a name="SqlDatabaseInstance" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstance;

SqlDatabaseInstance.Builder.create(Construct scope, java.lang.String id)
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
    .databaseVersion(java.lang.String)
//  .clone(SqlDatabaseInstanceClone)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .encryptionKeyName(java.lang.String)
//  .id(java.lang.String)
//  .instanceType(java.lang.String)
//  .maintenanceVersion(java.lang.String)
//  .masterInstanceName(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .replicaConfiguration(SqlDatabaseInstanceReplicaConfiguration)
//  .restoreBackupContext(SqlDatabaseInstanceRestoreBackupContext)
//  .rootPassword(java.lang.String)
//  .settings(SqlDatabaseInstanceSettings)
//  .timeouts(SqlDatabaseInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.clone">clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Used to block Terraform from deleting a SQL Instance. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.encryptionKeyName">encryptionKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.maintenanceVersion">maintenanceVersion</a></code> | <code>java.lang.String</code> | Maintenance version. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.masterInstanceName">masterInstanceName</a></code> | <code>java.lang.String</code> | The name of the instance that will act as the master in the replication setup. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region the instance will sit in. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.restoreBackupContext">restoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | restore_backup_context block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.rootPassword">rootPassword</a></code> | <code>java.lang.String</code> | Initial root password. Required for MS SQL Server. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.databaseVersion"></a>

- *Type:* java.lang.String

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#database_version SqlDatabaseInstance#database_version}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.clone"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#clone SqlDatabaseInstance#clone}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Used to block Terraform from deleting a SQL Instance. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#deletion_protection SqlDatabaseInstance#deletion_protection}

---

##### `encryptionKeyName`<sup>Optional</sup> <a name="encryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.encryptionKeyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#instance_type SqlDatabaseInstance#instance_type}

---

##### `maintenanceVersion`<sup>Optional</sup> <a name="maintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.maintenanceVersion"></a>

- *Type:* java.lang.String

Maintenance version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#maintenance_version SqlDatabaseInstance#maintenance_version}

---

##### `masterInstanceName`<sup>Optional</sup> <a name="masterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.masterInstanceName"></a>

- *Type:* java.lang.String

The name of the instance that will act as the master in the replication setup.

Note, this requires the master to have binary_log_enabled set, as well as existing backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#master_instance_name SqlDatabaseInstance#master_instance_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#project SqlDatabaseInstance#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region the instance will sit in.

Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#region SqlDatabaseInstance#region}

---

##### `replicaConfiguration`<sup>Optional</sup> <a name="replicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.replicaConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#replica_configuration SqlDatabaseInstance#replica_configuration}

---

##### `restoreBackupContext`<sup>Optional</sup> <a name="restoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.restoreBackupContext"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

restore_backup_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#restore_backup_context SqlDatabaseInstance#restore_backup_context}

---

##### `rootPassword`<sup>Optional</sup> <a name="rootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.rootPassword"></a>

- *Type:* java.lang.String

Initial root password. Required for MS SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#root_password SqlDatabaseInstance#root_password}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#settings SqlDatabaseInstance#settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#timeouts SqlDatabaseInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone">putClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration">putReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext">putRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone">resetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName">resetEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion">resetMaintenanceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName">resetMasterInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration">resetReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext">resetRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword">resetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClone` <a name="putClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone"></a>

```java
public void putClone(SqlDatabaseInstanceClone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `putReplicaConfiguration` <a name="putReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration"></a>

```java
public void putReplicaConfiguration(SqlDatabaseInstanceReplicaConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `putRestoreBackupContext` <a name="putRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext"></a>

```java
public void putRestoreBackupContext(SqlDatabaseInstanceRestoreBackupContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings"></a>

```java
public void putSettings(SqlDatabaseInstanceSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts"></a>

```java
public void putTimeouts(SqlDatabaseInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---

##### `resetClone` <a name="resetClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone"></a>

```java
public void resetClone()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetEncryptionKeyName` <a name="resetEncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName"></a>

```java
public void resetEncryptionKeyName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetMaintenanceVersion` <a name="resetMaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion"></a>

```java
public void resetMaintenanceVersion()
```

##### `resetMasterInstanceName` <a name="resetMasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName"></a>

```java
public void resetMasterInstanceName()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplicaConfiguration` <a name="resetReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration"></a>

```java
public void resetReplicaConfiguration()
```

##### `resetRestoreBackupContext` <a name="resetRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext"></a>

```java
public void resetRestoreBackupContext()
```

##### `resetRootPassword` <a name="resetRootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword"></a>

```java
public void resetRootPassword()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstance;

SqlDatabaseInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstance;

SqlDatabaseInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstance;

SqlDatabaseInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstance;

SqlDatabaseInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlDatabaseInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlDatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions">availableMaintenanceVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress">firstIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.pscServiceAttachmentLink">pscServiceAttachmentLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext">restoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert">serverCaCert</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress">serviceAccountEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput">cloneInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput">databaseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput">encryptionKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput">maintenanceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput">masterInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput">replicaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput">restoreBackupContextInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput">rootPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName">encryptionKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion">maintenanceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName">masterInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword">rootPassword</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availableMaintenanceVersions`<sup>Required</sup> <a name="availableMaintenanceVersions" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```java
public java.util.List<java.lang.String> getAvailableMaintenanceVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone"></a>

```java
public SqlDatabaseInstanceCloneOutputReference getClone();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `firstIpAddress`<sup>Required</sup> <a name="firstIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress"></a>

```java
public java.lang.String getFirstIpAddress();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress"></a>

```java
public SqlDatabaseInstanceIpAddressList getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `pscServiceAttachmentLink`<sup>Required</sup> <a name="pscServiceAttachmentLink" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.pscServiceAttachmentLink"></a>

```java
public java.lang.String getPscServiceAttachmentLink();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `replicaConfiguration`<sup>Required</sup> <a name="replicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration"></a>

```java
public SqlDatabaseInstanceReplicaConfigurationOutputReference getReplicaConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a>

---

##### `restoreBackupContext`<sup>Required</sup> <a name="restoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext"></a>

```java
public SqlDatabaseInstanceRestoreBackupContextOutputReference getRestoreBackupContext();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serverCaCert`<sup>Required</sup> <a name="serverCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert"></a>

```java
public SqlDatabaseInstanceServerCaCertList getServerCaCert();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a>

---

##### `serviceAccountEmailAddress`<sup>Required</sup> <a name="serviceAccountEmailAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```java
public java.lang.String getServiceAccountEmailAddress();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings"></a>

```java
public SqlDatabaseInstanceSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts"></a>

```java
public SqlDatabaseInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a>

---

##### `cloneInput`<sup>Optional</sup> <a name="cloneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput"></a>

```java
public SqlDatabaseInstanceClone getCloneInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput"></a>

```java
public java.lang.String getDatabaseVersionInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionKeyNameInput`<sup>Optional</sup> <a name="encryptionKeyNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput"></a>

```java
public java.lang.String getEncryptionKeyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceVersionInput`<sup>Optional</sup> <a name="maintenanceVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput"></a>

```java
public java.lang.String getMaintenanceVersionInput();
```

- *Type:* java.lang.String

---

##### `masterInstanceNameInput`<sup>Optional</sup> <a name="masterInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput"></a>

```java
public java.lang.String getMasterInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaConfigurationInput`<sup>Optional</sup> <a name="replicaConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput"></a>

```java
public SqlDatabaseInstanceReplicaConfiguration getReplicaConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `restoreBackupContextInput`<sup>Optional</sup> <a name="restoreBackupContextInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput"></a>

```java
public SqlDatabaseInstanceRestoreBackupContext getRestoreBackupContextInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `rootPasswordInput`<sup>Optional</sup> <a name="rootPasswordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput"></a>

```java
public java.lang.String getRootPasswordInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput"></a>

```java
public SqlDatabaseInstanceSettings getSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionKeyName`<sup>Required</sup> <a name="encryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName"></a>

```java
public java.lang.String getEncryptionKeyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `maintenanceVersion`<sup>Required</sup> <a name="maintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion"></a>

```java
public java.lang.String getMaintenanceVersion();
```

- *Type:* java.lang.String

---

##### `masterInstanceName`<sup>Required</sup> <a name="masterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName"></a>

```java
public java.lang.String getMasterInstanceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `rootPassword`<sup>Required</sup> <a name="rootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword"></a>

```java
public java.lang.String getRootPassword();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlDatabaseInstanceClone <a name="SqlDatabaseInstanceClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceClone;

SqlDatabaseInstanceClone.builder()
    .sourceInstanceName(java.lang.String)
//  .allocatedIpRange(java.lang.String)
//  .databaseNames(java.util.List<java.lang.String>)
//  .pointInTime(java.lang.String)
//  .preferredZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName">sourceInstanceName</a></code> | <code>java.lang.String</code> | The name of the instance from which the point in time should be restored. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange">allocatedIpRange</a></code> | <code>java.lang.String</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames">databaseNames</a></code> | <code>java.util.List<java.lang.String></code> | (SQL Server only, use with point_in_time) clone only the specified databases from the source instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime">pointInTime</a></code> | <code>java.lang.String</code> | The timestamp of the point in time that should be restored. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.preferredZone">preferredZone</a></code> | <code>java.lang.String</code> | (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. |

---

##### `sourceInstanceName`<sup>Required</sup> <a name="sourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName"></a>

```java
public java.lang.String getSourceInstanceName();
```

- *Type:* java.lang.String

The name of the instance from which the point in time should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#source_instance_name SqlDatabaseInstance#source_instance_name}

---

##### `allocatedIpRange`<sup>Optional</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange"></a>

```java
public java.lang.String getAllocatedIpRange();
```

- *Type:* java.lang.String

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `databaseNames`<sup>Optional</sup> <a name="databaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames"></a>

```java
public java.util.List<java.lang.String> getDatabaseNames();
```

- *Type:* java.util.List<java.lang.String>

(SQL Server only, use with point_in_time) clone only the specified databases from the source instance.

Clone all databases if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#database_names SqlDatabaseInstance#database_names}

---

##### `pointInTime`<sup>Optional</sup> <a name="pointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime"></a>

```java
public java.lang.String getPointInTime();
```

- *Type:* java.lang.String

The timestamp of the point in time that should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#point_in_time SqlDatabaseInstance#point_in_time}

---

##### `preferredZone`<sup>Optional</sup> <a name="preferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.preferredZone"></a>

```java
public java.lang.String getPreferredZone();
```

- *Type:* java.lang.String

(Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone.

If no zone is specified, clone to the same zone as the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#preferred_zone SqlDatabaseInstance#preferred_zone}

---

### SqlDatabaseInstanceConfig <a name="SqlDatabaseInstanceConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceConfig;

SqlDatabaseInstanceConfig.builder()
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
    .databaseVersion(java.lang.String)
//  .clone(SqlDatabaseInstanceClone)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .encryptionKeyName(java.lang.String)
//  .id(java.lang.String)
//  .instanceType(java.lang.String)
//  .maintenanceVersion(java.lang.String)
//  .masterInstanceName(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .replicaConfiguration(SqlDatabaseInstanceReplicaConfiguration)
//  .restoreBackupContext(SqlDatabaseInstanceRestoreBackupContext)
//  .rootPassword(java.lang.String)
//  .settings(SqlDatabaseInstanceSettings)
//  .timeouts(SqlDatabaseInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Used to block Terraform from deleting a SQL Instance. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName">encryptionKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion">maintenanceVersion</a></code> | <code>java.lang.String</code> | Maintenance version. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName">masterInstanceName</a></code> | <code>java.lang.String</code> | The name of the instance that will act as the master in the replication setup. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region the instance will sit in. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext">restoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | restore_backup_context block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword">rootPassword</a></code> | <code>java.lang.String</code> | Initial root password. Required for MS SQL Server. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#database_version SqlDatabaseInstance#database_version}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone"></a>

```java
public SqlDatabaseInstanceClone getClone();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#clone SqlDatabaseInstance#clone}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Used to block Terraform from deleting a SQL Instance. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#deletion_protection SqlDatabaseInstance#deletion_protection}

---

##### `encryptionKeyName`<sup>Optional</sup> <a name="encryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName"></a>

```java
public java.lang.String getEncryptionKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#instance_type SqlDatabaseInstance#instance_type}

---

##### `maintenanceVersion`<sup>Optional</sup> <a name="maintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion"></a>

```java
public java.lang.String getMaintenanceVersion();
```

- *Type:* java.lang.String

Maintenance version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#maintenance_version SqlDatabaseInstance#maintenance_version}

---

##### `masterInstanceName`<sup>Optional</sup> <a name="masterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName"></a>

```java
public java.lang.String getMasterInstanceName();
```

- *Type:* java.lang.String

The name of the instance that will act as the master in the replication setup.

Note, this requires the master to have binary_log_enabled set, as well as existing backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#master_instance_name SqlDatabaseInstance#master_instance_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#project SqlDatabaseInstance#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region the instance will sit in.

Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#region SqlDatabaseInstance#region}

---

##### `replicaConfiguration`<sup>Optional</sup> <a name="replicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration"></a>

```java
public SqlDatabaseInstanceReplicaConfiguration getReplicaConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#replica_configuration SqlDatabaseInstance#replica_configuration}

---

##### `restoreBackupContext`<sup>Optional</sup> <a name="restoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext"></a>

```java
public SqlDatabaseInstanceRestoreBackupContext getRestoreBackupContext();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

restore_backup_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#restore_backup_context SqlDatabaseInstance#restore_backup_context}

---

##### `rootPassword`<sup>Optional</sup> <a name="rootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword"></a>

```java
public java.lang.String getRootPassword();
```

- *Type:* java.lang.String

Initial root password. Required for MS SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#root_password SqlDatabaseInstance#root_password}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings"></a>

```java
public SqlDatabaseInstanceSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#settings SqlDatabaseInstance#settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts"></a>

```java
public SqlDatabaseInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#timeouts SqlDatabaseInstance#timeouts}

---

### SqlDatabaseInstanceIpAddress <a name="SqlDatabaseInstanceIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceIpAddress;

SqlDatabaseInstanceIpAddress.builder()
    .build();
```


### SqlDatabaseInstanceReplicaConfiguration <a name="SqlDatabaseInstanceReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceReplicaConfiguration;

SqlDatabaseInstanceReplicaConfiguration.builder()
//  .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
//  .connectRetryInterval(java.lang.Number)
//  .dumpFilePath(java.lang.String)
//  .failoverTarget(java.lang.Boolean)
//  .failoverTarget(IResolvable)
//  .masterHeartbeatPeriod(java.lang.Number)
//  .password(java.lang.String)
//  .sslCipher(java.lang.String)
//  .username(java.lang.String)
//  .verifyServerCertificate(java.lang.Boolean)
//  .verifyServerCertificate(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | PEM representation of the trusted CA's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM representation of the replica's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval">connectRetryInterval</a></code> | <code>java.lang.Number</code> | The number of seconds between connect retries. MySQL's default is 60 seconds. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath">dumpFilePath</a></code> | <code>java.lang.String</code> | Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget">failoverTarget</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the replica is the failover target. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod">masterHeartbeatPeriod</a></code> | <code>java.lang.Number</code> | Time in ms between replication heartbeats. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password">password</a></code> | <code>java.lang.String</code> | Password for the replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher">sslCipher</a></code> | <code>java.lang.String</code> | Permissible ciphers for use in SSL encryption. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username">username</a></code> | <code>java.lang.String</code> | Username for replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate">verifyServerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the master's common name value is checked during the SSL handshake. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

PEM representation of the trusted CA's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#ca_certificate SqlDatabaseInstance#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

PEM representation of the replica's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#client_certificate SqlDatabaseInstance#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#client_key SqlDatabaseInstance#client_key}

---

##### `connectRetryInterval`<sup>Optional</sup> <a name="connectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval"></a>

```java
public java.lang.Number getConnectRetryInterval();
```

- *Type:* java.lang.Number

The number of seconds between connect retries. MySQL's default is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#connect_retry_interval SqlDatabaseInstance#connect_retry_interval}

---

##### `dumpFilePath`<sup>Optional</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath"></a>

```java
public java.lang.String getDumpFilePath();
```

- *Type:* java.lang.String

Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#dump_file_path SqlDatabaseInstance#dump_file_path}

---

##### `failoverTarget`<sup>Optional</sup> <a name="failoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget"></a>

```java
public java.lang.Object getFailoverTarget();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the replica is the failover target.

If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#failover_target SqlDatabaseInstance#failover_target}

---

##### `masterHeartbeatPeriod`<sup>Optional</sup> <a name="masterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod"></a>

```java
public java.lang.Number getMasterHeartbeatPeriod();
```

- *Type:* java.lang.Number

Time in ms between replication heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#master_heartbeat_period SqlDatabaseInstance#master_heartbeat_period}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#password SqlDatabaseInstance#password}

---

##### `sslCipher`<sup>Optional</sup> <a name="sslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher"></a>

```java
public java.lang.String getSslCipher();
```

- *Type:* java.lang.String

Permissible ciphers for use in SSL encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#ssl_cipher SqlDatabaseInstance#ssl_cipher}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#username SqlDatabaseInstance#username}

---

##### `verifyServerCertificate`<sup>Optional</sup> <a name="verifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate"></a>

```java
public java.lang.Object getVerifyServerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the master's common name value is checked during the SSL handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#verify_server_certificate SqlDatabaseInstance#verify_server_certificate}

---

### SqlDatabaseInstanceRestoreBackupContext <a name="SqlDatabaseInstanceRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceRestoreBackupContext;

SqlDatabaseInstanceRestoreBackupContext.builder()
    .backupRunId(java.lang.Number)
//  .instanceId(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId">backupRunId</a></code> | <code>java.lang.Number</code> | The ID of the backup run to restore from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the instance that the backup was taken from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project">project</a></code> | <code>java.lang.String</code> | The full project ID of the source instance. |

---

##### `backupRunId`<sup>Required</sup> <a name="backupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId"></a>

```java
public java.lang.Number getBackupRunId();
```

- *Type:* java.lang.Number

The ID of the backup run to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#backup_run_id SqlDatabaseInstance#backup_run_id}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of the instance that the backup was taken from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#instance_id SqlDatabaseInstance#instance_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The full project ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#project SqlDatabaseInstance#project}

---

### SqlDatabaseInstanceServerCaCert <a name="SqlDatabaseInstanceServerCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceServerCaCert;

SqlDatabaseInstanceServerCaCert.builder()
    .build();
```


### SqlDatabaseInstanceSettings <a name="SqlDatabaseInstanceSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettings;

SqlDatabaseInstanceSettings.builder()
    .tier(java.lang.String)
//  .activationPolicy(java.lang.String)
//  .activeDirectoryConfig(SqlDatabaseInstanceSettingsActiveDirectoryConfig)
//  .advancedMachineFeatures(SqlDatabaseInstanceSettingsAdvancedMachineFeatures)
//  .availabilityType(java.lang.String)
//  .backupConfiguration(SqlDatabaseInstanceSettingsBackupConfiguration)
//  .collation(java.lang.String)
//  .connectorEnforcement(java.lang.String)
//  .databaseFlags(IResolvable)
//  .databaseFlags(java.util.List<SqlDatabaseInstanceSettingsDatabaseFlags>)
//  .dataCacheConfig(SqlDatabaseInstanceSettingsDataCacheConfig)
//  .deletionProtectionEnabled(java.lang.Boolean)
//  .deletionProtectionEnabled(IResolvable)
//  .denyMaintenancePeriod(SqlDatabaseInstanceSettingsDenyMaintenancePeriod)
//  .diskAutoresize(java.lang.Boolean)
//  .diskAutoresize(IResolvable)
//  .diskAutoresizeLimit(java.lang.Number)
//  .diskSize(java.lang.Number)
//  .diskType(java.lang.String)
//  .edition(java.lang.String)
//  .insightsConfig(SqlDatabaseInstanceSettingsInsightsConfig)
//  .ipConfiguration(SqlDatabaseInstanceSettingsIpConfiguration)
//  .locationPreference(SqlDatabaseInstanceSettingsLocationPreference)
//  .maintenanceWindow(SqlDatabaseInstanceSettingsMaintenanceWindow)
//  .passwordValidationPolicy(SqlDatabaseInstanceSettingsPasswordValidationPolicy)
//  .pricingPlan(java.lang.String)
//  .sqlServerAuditConfig(SqlDatabaseInstanceSettingsSqlServerAuditConfig)
//  .timeZone(java.lang.String)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier">tier</a></code> | <code>java.lang.String</code> | The machine type to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy">activationPolicy</a></code> | <code>java.lang.String</code> | This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | active_directory_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType">availabilityType</a></code> | <code>java.lang.String</code> | The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | backup_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation">collation</a></code> | <code>java.lang.String</code> | The name of server instance collation. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement">connectorEnforcement</a></code> | <code>java.lang.String</code> | Specifies if connections must use Cloud SQL connectors. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags">databaseFlags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>></code> | database_flags block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.dataCacheConfig">dataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | data_cache_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configuration to protect against accidental instance deletion. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize">diskAutoresize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables auto-resizing of the storage size. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit">diskAutoresizeLimit</a></code> | <code>java.lang.Number</code> | The maximum size, in GB, to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize">diskSize</a></code> | <code>java.lang.Number</code> | The size of data disk, in GB. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType">diskType</a></code> | <code>java.lang.String</code> | The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.edition">edition</a></code> | <code>java.lang.String</code> | The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig">insightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | insights_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference">locationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | location_preference block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy">passwordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | password_validation_policy block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan">pricingPlan</a></code> | <code>java.lang.String</code> | Pricing plan for this instance, can only be PER_USE. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig">sqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | sql_server_audit_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value user label pairs to assign to the instance. |

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The machine type to use.

See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#tier SqlDatabaseInstance#tier}

---

##### `activationPolicy`<sup>Optional</sup> <a name="activationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy"></a>

```java
public java.lang.String getActivationPolicy();
```

- *Type:* java.lang.String

This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#activation_policy SqlDatabaseInstance#activation_policy}

---

##### `activeDirectoryConfig`<sup>Optional</sup> <a name="activeDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig"></a>

```java
public SqlDatabaseInstanceSettingsActiveDirectoryConfig getActiveDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

active_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#active_directory_config SqlDatabaseInstance#active_directory_config}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.advancedMachineFeatures"></a>

```java
public SqlDatabaseInstanceSettingsAdvancedMachineFeatures getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#advanced_machine_features SqlDatabaseInstance#advanced_machine_features}

---

##### `availabilityType`<sup>Optional</sup> <a name="availabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType"></a>

```java
public java.lang.String getAvailabilityType();
```

- *Type:* java.lang.String

The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL).

For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#availability_type SqlDatabaseInstance#availability_type}

---

##### `backupConfiguration`<sup>Optional</sup> <a name="backupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfiguration getBackupConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

backup_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#backup_configuration SqlDatabaseInstance#backup_configuration}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

The name of server instance collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#collation SqlDatabaseInstance#collation}

---

##### `connectorEnforcement`<sup>Optional</sup> <a name="connectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement"></a>

```java
public java.lang.String getConnectorEnforcement();
```

- *Type:* java.lang.String

Specifies if connections must use Cloud SQL connectors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#connector_enforcement SqlDatabaseInstance#connector_enforcement}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags"></a>

```java
public java.lang.Object getDatabaseFlags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>>

database_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#database_flags SqlDatabaseInstance#database_flags}

---

##### `dataCacheConfig`<sup>Optional</sup> <a name="dataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.dataCacheConfig"></a>

```java
public SqlDatabaseInstanceSettingsDataCacheConfig getDataCacheConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#data_cache_config SqlDatabaseInstance#data_cache_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configuration to protect against accidental instance deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#deletion_protection_enabled SqlDatabaseInstance#deletion_protection_enabled}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod"></a>

```java
public SqlDatabaseInstanceSettingsDenyMaintenancePeriod getDenyMaintenancePeriod();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#deny_maintenance_period SqlDatabaseInstance#deny_maintenance_period}

---

##### `diskAutoresize`<sup>Optional</sup> <a name="diskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize"></a>

```java
public java.lang.Object getDiskAutoresize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables auto-resizing of the storage size. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#disk_autoresize SqlDatabaseInstance#disk_autoresize}

---

##### `diskAutoresizeLimit`<sup>Optional</sup> <a name="diskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit"></a>

```java
public java.lang.Number getDiskAutoresizeLimit();
```

- *Type:* java.lang.Number

The maximum size, in GB, to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#disk_autoresize_limit SqlDatabaseInstance#disk_autoresize_limit}

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize"></a>

```java
public java.lang.Number getDiskSize();
```

- *Type:* java.lang.Number

The size of data disk, in GB.

Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#disk_size SqlDatabaseInstance#disk_size}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#disk_type SqlDatabaseInstance#disk_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#edition SqlDatabaseInstance#edition}

---

##### `insightsConfig`<sup>Optional</sup> <a name="insightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig"></a>

```java
public SqlDatabaseInstanceSettingsInsightsConfig getInsightsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#insights_config SqlDatabaseInstance#insights_config}

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration"></a>

```java
public SqlDatabaseInstanceSettingsIpConfiguration getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#ip_configuration SqlDatabaseInstance#ip_configuration}

---

##### `locationPreference`<sup>Optional</sup> <a name="locationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference"></a>

```java
public SqlDatabaseInstanceSettingsLocationPreference getLocationPreference();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

location_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#location_preference SqlDatabaseInstance#location_preference}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow"></a>

```java
public SqlDatabaseInstanceSettingsMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#maintenance_window SqlDatabaseInstance#maintenance_window}

---

##### `passwordValidationPolicy`<sup>Optional</sup> <a name="passwordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy"></a>

```java
public SqlDatabaseInstanceSettingsPasswordValidationPolicy getPasswordValidationPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

password_validation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#password_validation_policy SqlDatabaseInstance#password_validation_policy}

---

##### `pricingPlan`<sup>Optional</sup> <a name="pricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan"></a>

```java
public java.lang.String getPricingPlan();
```

- *Type:* java.lang.String

Pricing plan for this instance, can only be PER_USE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#pricing_plan SqlDatabaseInstance#pricing_plan}

---

##### `sqlServerAuditConfig`<sup>Optional</sup> <a name="sqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig"></a>

```java
public SqlDatabaseInstanceSettingsSqlServerAuditConfig getSqlServerAuditConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

sql_server_audit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#sql_server_audit_config SqlDatabaseInstance#sql_server_audit_config}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#time_zone SqlDatabaseInstance#time_zone}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value user label pairs to assign to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#user_labels SqlDatabaseInstance#user_labels}

---

### SqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsActiveDirectoryConfig;

SqlDatabaseInstanceSettingsActiveDirectoryConfig.builder()
    .domain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Domain name of the Active Directory for SQL Server (e.g., mydomain.com). |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Domain name of the Active Directory for SQL Server (e.g., mydomain.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#domain SqlDatabaseInstance#domain}

---

### SqlDatabaseInstanceSettingsAdvancedMachineFeatures <a name="SqlDatabaseInstanceSettingsAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures;

SqlDatabaseInstanceSettingsAdvancedMachineFeatures.builder()
//  .threadsPerCore(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | The number of threads per physical core. Can be 1 or 2. |

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

The number of threads per physical core. Can be 1 or 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#threads_per_core SqlDatabaseInstance#threads_per_core}

---

### SqlDatabaseInstanceSettingsBackupConfiguration <a name="SqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsBackupConfiguration;

SqlDatabaseInstanceSettingsBackupConfiguration.builder()
//  .backupRetentionSettings(SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings)
//  .binaryLogEnabled(java.lang.Boolean)
//  .binaryLogEnabled(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .location(java.lang.String)
//  .pointInTimeRecoveryEnabled(java.lang.Boolean)
//  .pointInTimeRecoveryEnabled(IResolvable)
//  .startTime(java.lang.String)
//  .transactionLogRetentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings">backupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | backup_retention_settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled">binaryLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if binary logging is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if backup configuration is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location">location</a></code> | <code>java.lang.String</code> | Location of the backup configuration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if Point-in-time recovery is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime">startTime</a></code> | <code>java.lang.String</code> | HH:MM format time indicating when backup configuration starts. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays">transactionLogRetentionDays</a></code> | <code>java.lang.Number</code> | The number of days of transaction logs we retain for point in time restore, from 1-7. |

---

##### `backupRetentionSettings`<sup>Optional</sup> <a name="backupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings getBackupRetentionSettings();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

backup_retention_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#backup_retention_settings SqlDatabaseInstance#backup_retention_settings}

---

##### `binaryLogEnabled`<sup>Optional</sup> <a name="binaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled"></a>

```java
public java.lang.Object getBinaryLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if binary logging is enabled.

If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#binary_log_enabled SqlDatabaseInstance#binary_log_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if backup configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#enabled SqlDatabaseInstance#enabled}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the backup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#location SqlDatabaseInstance#location}

---

##### `pointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled"></a>

```java
public java.lang.Object getPointInTimeRecoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if Point-in-time recovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#point_in_time_recovery_enabled SqlDatabaseInstance#point_in_time_recovery_enabled}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

HH:MM format time indicating when backup configuration starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#start_time SqlDatabaseInstance#start_time}

---

##### `transactionLogRetentionDays`<sup>Optional</sup> <a name="transactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays"></a>

```java
public java.lang.Number getTransactionLogRetentionDays();
```

- *Type:* java.lang.Number

The number of days of transaction logs we retain for point in time restore, from 1-7.

(For PostgreSQL Enterprise Plus instances, from 1 to 35.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#transaction_log_retention_days SqlDatabaseInstance#transaction_log_retention_days}

---

### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;

SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.builder()
    .retainedBackups(java.lang.Number)
//  .retentionUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups">retainedBackups</a></code> | <code>java.lang.Number</code> | Number of backups to retain. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | The unit that 'retainedBackups' represents. Defaults to COUNT. |

---

##### `retainedBackups`<sup>Required</sup> <a name="retainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups"></a>

```java
public java.lang.Number getRetainedBackups();
```

- *Type:* java.lang.Number

Number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#retained_backups SqlDatabaseInstance#retained_backups}

---

##### `retentionUnit`<sup>Optional</sup> <a name="retentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

The unit that 'retainedBackups' represents. Defaults to COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#retention_unit SqlDatabaseInstance#retention_unit}

---

### SqlDatabaseInstanceSettingsDatabaseFlags <a name="SqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsDatabaseFlags;

SqlDatabaseInstanceSettingsDatabaseFlags.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name">name</a></code> | <code>java.lang.String</code> | Name of the flag. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value">value</a></code> | <code>java.lang.String</code> | Value of the flag. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}

---

### SqlDatabaseInstanceSettingsDataCacheConfig <a name="SqlDatabaseInstanceSettingsDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsDataCacheConfig;

SqlDatabaseInstanceSettingsDataCacheConfig.builder()
//  .dataCacheEnabled(java.lang.Boolean)
//  .dataCacheEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled">dataCacheEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether data cache is enabled for the instance. |

---

##### `dataCacheEnabled`<sup>Optional</sup> <a name="dataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled"></a>

```java
public java.lang.Object getDataCacheEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether data cache is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#data_cache_enabled SqlDatabaseInstance#data_cache_enabled}

---

### SqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod;

SqlDatabaseInstanceSettingsDenyMaintenancePeriod.builder()
    .endDate(java.lang.String)
    .startDate(java.lang.String)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate">endDate</a></code> | <code>java.lang.String</code> | End date before which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate">startDate</a></code> | <code>java.lang.String</code> | Start date after which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time">time</a></code> | <code>java.lang.String</code> | Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

End date before which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#end_date SqlDatabaseInstance#end_date}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

Start date after which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#start_date SqlDatabaseInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date.

The time is in format: HH:mm:SS, i.e., 00:00:00

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#time SqlDatabaseInstance#time}

---

### SqlDatabaseInstanceSettingsInsightsConfig <a name="SqlDatabaseInstanceSettingsInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsInsightsConfig;

SqlDatabaseInstanceSettingsInsightsConfig.builder()
//  .queryInsightsEnabled(java.lang.Boolean)
//  .queryInsightsEnabled(IResolvable)
//  .queryPlansPerMinute(java.lang.Number)
//  .queryStringLength(java.lang.Number)
//  .recordApplicationTags(java.lang.Boolean)
//  .recordApplicationTags(IResolvable)
//  .recordClientAddress(java.lang.Boolean)
//  .recordClientAddress(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled">queryInsightsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if Query Insights feature is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength">queryStringLength</a></code> | <code>java.lang.Number</code> | Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags">recordApplicationTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if Query Insights will record application tags from query when enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress">recordClientAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if Query Insights will record client address when enabled. |

---

##### `queryInsightsEnabled`<sup>Optional</sup> <a name="queryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled"></a>

```java
public java.lang.Object getQueryInsightsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if Query Insights feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#query_insights_enabled SqlDatabaseInstance#query_insights_enabled}

---

##### `queryPlansPerMinute`<sup>Optional</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

Number of query execution plans captured by Insights per minute for all queries combined.

Between 0 and 20. Default to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#query_plans_per_minute SqlDatabaseInstance#query_plans_per_minute}

---

##### `queryStringLength`<sup>Optional</sup> <a name="queryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength"></a>

```java
public java.lang.Number getQueryStringLength();
```

- *Type:* java.lang.Number

Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#query_string_length SqlDatabaseInstance#query_string_length}

---

##### `recordApplicationTags`<sup>Optional</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags"></a>

```java
public java.lang.Object getRecordApplicationTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if Query Insights will record application tags from query when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#record_application_tags SqlDatabaseInstance#record_application_tags}

---

##### `recordClientAddress`<sup>Optional</sup> <a name="recordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress"></a>

```java
public java.lang.Object getRecordClientAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if Query Insights will record client address when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#record_client_address SqlDatabaseInstance#record_client_address}

---

### SqlDatabaseInstanceSettingsIpConfiguration <a name="SqlDatabaseInstanceSettingsIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfiguration;

SqlDatabaseInstanceSettingsIpConfiguration.builder()
//  .allocatedIpRange(java.lang.String)
//  .authorizedNetworks(IResolvable)
//  .authorizedNetworks(java.util.List<SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks>)
//  .enablePrivatePathForGoogleCloudServices(java.lang.Boolean)
//  .enablePrivatePathForGoogleCloudServices(IResolvable)
//  .ipv4Enabled(java.lang.Boolean)
//  .ipv4Enabled(IResolvable)
//  .privateNetwork(java.lang.String)
//  .pscConfig(IResolvable)
//  .pscConfig(java.util.List<SqlDatabaseInstanceSettingsIpConfigurationPscConfig>)
//  .requireSsl(java.lang.Boolean)
//  .requireSsl(IResolvable)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange">allocatedIpRange</a></code> | <code>java.lang.String</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks">authorizedNetworks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>></code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices">enablePrivatePathForGoogleCloudServices</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled">ipv4Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this Cloud SQL instance should be assigned a public IPV4 address. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork">privateNetwork</a></code> | <code>java.lang.String</code> | The VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig">pscConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.requireSsl">requireSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether SSL connections over IP are enforced or not. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Specify how SSL connection should be enforced in DB connections. |

---

##### `allocatedIpRange`<sup>Optional</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange"></a>

```java
public java.lang.String getAllocatedIpRange();
```

- *Type:* java.lang.String

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `authorizedNetworks`<sup>Optional</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks"></a>

```java
public java.lang.Object getAuthorizedNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>>

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#authorized_networks SqlDatabaseInstance#authorized_networks}

---

##### `enablePrivatePathForGoogleCloudServices`<sup>Optional</sup> <a name="enablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices"></a>

```java
public java.lang.Object getEnablePrivatePathForGoogleCloudServices();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection.

SQLSERVER database type is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#enable_private_path_for_google_cloud_services SqlDatabaseInstance#enable_private_path_for_google_cloud_services}

---

##### `ipv4Enabled`<sup>Optional</sup> <a name="ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled"></a>

```java
public java.lang.Object getIpv4Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this Cloud SQL instance should be assigned a public IPV4 address.

At least ipv4_enabled must be enabled or a private_network must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#ipv4_enabled SqlDatabaseInstance#ipv4_enabled}

---

##### `privateNetwork`<sup>Optional</sup> <a name="privateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork"></a>

```java
public java.lang.String getPrivateNetwork();
```

- *Type:* java.lang.String

The VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#private_network SqlDatabaseInstance#private_network}

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig"></a>

```java
public java.lang.Object getPscConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#psc_config SqlDatabaseInstance#psc_config}

---

##### `requireSsl`<sup>Optional</sup> <a name="requireSsl" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.requireSsl"></a>

```java
public java.lang.Object getRequireSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether SSL connections over IP are enforced or not.

To change this field, also set the corresponding value in ssl_mode if it has been set too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#require_ssl SqlDatabaseInstance#require_ssl}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Specify how SSL connection should be enforced in DB connections.

This field provides more SSL enforcment options compared to require_ssl. To change this field, also set the correspoding value in require_ssl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#ssl_mode SqlDatabaseInstance#ssl_mode}

---

### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks;

SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.builder()
    .value(java.lang.String)
//  .expirationTime(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}.

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}.

---

### SqlDatabaseInstanceSettingsIpConfigurationPscConfig <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig;

SqlDatabaseInstanceSettingsIpConfigurationPscConfig.builder()
//  .allowedConsumerProjects(java.util.List<java.lang.String>)
//  .pscEnabled(java.lang.Boolean)
//  .pscEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>java.util.List<java.lang.String></code> | List of consumer projects that are allow-listed for PSC connections to this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled">pscEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether PSC connectivity is enabled for this instance. |

---

##### `allowedConsumerProjects`<sup>Optional</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjects();
```

- *Type:* java.util.List<java.lang.String>

List of consumer projects that are allow-listed for PSC connections to this instance.

This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#allowed_consumer_projects SqlDatabaseInstance#allowed_consumer_projects}

---

##### `pscEnabled`<sup>Optional</sup> <a name="pscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled"></a>

```java
public java.lang.Object getPscEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether PSC connectivity is enabled for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#psc_enabled SqlDatabaseInstance#psc_enabled}

---

### SqlDatabaseInstanceSettingsLocationPreference <a name="SqlDatabaseInstanceSettingsLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsLocationPreference;

SqlDatabaseInstanceSettingsLocationPreference.builder()
//  .followGaeApplication(java.lang.String)
//  .secondaryZone(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication">followGaeApplication</a></code> | <code>java.lang.String</code> | A Google App Engine application whose zone to remain in. Must be in the same region as this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone">secondaryZone</a></code> | <code>java.lang.String</code> | The preferred Compute Engine zone for the secondary/failover. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone">zone</a></code> | <code>java.lang.String</code> | The preferred compute engine zone. |

---

##### `followGaeApplication`<sup>Optional</sup> <a name="followGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication"></a>

```java
public java.lang.String getFollowGaeApplication();
```

- *Type:* java.lang.String

A Google App Engine application whose zone to remain in. Must be in the same region as this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#follow_gae_application SqlDatabaseInstance#follow_gae_application}

---

##### `secondaryZone`<sup>Optional</sup> <a name="secondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone"></a>

```java
public java.lang.String getSecondaryZone();
```

- *Type:* java.lang.String

The preferred Compute Engine zone for the secondary/failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#secondary_zone SqlDatabaseInstance#secondary_zone}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The preferred compute engine zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#zone SqlDatabaseInstance#zone}

---

### SqlDatabaseInstanceSettingsMaintenanceWindow <a name="SqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsMaintenanceWindow;

SqlDatabaseInstanceSettingsMaintenanceWindow.builder()
//  .day(java.lang.Number)
//  .hour(java.lang.Number)
//  .updateTrack(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day">day</a></code> | <code>java.lang.Number</code> | Day of week (1-7), starting on Monday. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour">hour</a></code> | <code>java.lang.Number</code> | Hour of day (0-23), ignored if day not set. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack">updateTrack</a></code> | <code>java.lang.String</code> | Receive updates earlier (canary) or later (stable). |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of week (1-7), starting on Monday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#day SqlDatabaseInstance#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Hour of day (0-23), ignored if day not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#hour SqlDatabaseInstance#hour}

---

##### `updateTrack`<sup>Optional</sup> <a name="updateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack"></a>

```java
public java.lang.String getUpdateTrack();
```

- *Type:* java.lang.String

Receive updates earlier (canary) or later (stable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#update_track SqlDatabaseInstance#update_track}

---

### SqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsPasswordValidationPolicy;

SqlDatabaseInstanceSettingsPasswordValidationPolicy.builder()
    .enablePasswordPolicy(java.lang.Boolean)
    .enablePasswordPolicy(IResolvable)
//  .complexity(java.lang.String)
//  .disallowUsernameSubstring(java.lang.Boolean)
//  .disallowUsernameSubstring(IResolvable)
//  .minLength(java.lang.Number)
//  .passwordChangeInterval(java.lang.String)
//  .reuseInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy">enablePasswordPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the password policy is enabled or not. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity">complexity</a></code> | <code>java.lang.String</code> | Password complexity. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring">disallowUsernameSubstring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disallow username as a part of the password. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | Minimum number of characters allowed. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval">passwordChangeInterval</a></code> | <code>java.lang.String</code> | Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval">reuseInterval</a></code> | <code>java.lang.Number</code> | Number of previous passwords that cannot be reused. |

---

##### `enablePasswordPolicy`<sup>Required</sup> <a name="enablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy"></a>

```java
public java.lang.Object getEnablePasswordPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the password policy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#enable_password_policy SqlDatabaseInstance#enable_password_policy}

---

##### `complexity`<sup>Optional</sup> <a name="complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity"></a>

```java
public java.lang.String getComplexity();
```

- *Type:* java.lang.String

Password complexity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#complexity SqlDatabaseInstance#complexity}

---

##### `disallowUsernameSubstring`<sup>Optional</sup> <a name="disallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring"></a>

```java
public java.lang.Object getDisallowUsernameSubstring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disallow username as a part of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#disallow_username_substring SqlDatabaseInstance#disallow_username_substring}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

Minimum number of characters allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#min_length SqlDatabaseInstance#min_length}

---

##### `passwordChangeInterval`<sup>Optional</sup> <a name="passwordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval"></a>

```java
public java.lang.String getPasswordChangeInterval();
```

- *Type:* java.lang.String

Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#password_change_interval SqlDatabaseInstance#password_change_interval}

---

##### `reuseInterval`<sup>Optional</sup> <a name="reuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval"></a>

```java
public java.lang.Number getReuseInterval();
```

- *Type:* java.lang.Number

Number of previous passwords that cannot be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#reuse_interval SqlDatabaseInstance#reuse_interval}

---

### SqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsSqlServerAuditConfig;

SqlDatabaseInstanceSettingsSqlServerAuditConfig.builder()
//  .bucket(java.lang.String)
//  .retentionInterval(java.lang.String)
//  .uploadInterval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the destination bucket (e.g., gs://mybucket). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | How long to keep generated audit files. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval">uploadInterval</a></code> | <code>java.lang.String</code> | How often to upload generated audit files. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the destination bucket (e.g., gs://mybucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#bucket SqlDatabaseInstance#bucket}

---

##### `retentionInterval`<sup>Optional</sup> <a name="retentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval"></a>

```java
public java.lang.String getRetentionInterval();
```

- *Type:* java.lang.String

How long to keep generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#retention_interval SqlDatabaseInstance#retention_interval}

---

##### `uploadInterval`<sup>Optional</sup> <a name="uploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval"></a>

```java
public java.lang.String getUploadInterval();
```

- *Type:* java.lang.String

How often to upload generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#upload_interval SqlDatabaseInstance#upload_interval}

---

### SqlDatabaseInstanceTimeouts <a name="SqlDatabaseInstanceTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceTimeouts;

SqlDatabaseInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#create SqlDatabaseInstance#create}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#delete SqlDatabaseInstance#delete}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#update SqlDatabaseInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#create SqlDatabaseInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#delete SqlDatabaseInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/sql_database_instance#update SqlDatabaseInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlDatabaseInstanceCloneOutputReference <a name="SqlDatabaseInstanceCloneOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceCloneOutputReference;

new SqlDatabaseInstanceCloneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange">resetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames">resetDatabaseNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime">resetPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPreferredZone">resetPreferredZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocatedIpRange` <a name="resetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange"></a>

```java
public void resetAllocatedIpRange()
```

##### `resetDatabaseNames` <a name="resetDatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames"></a>

```java
public void resetDatabaseNames()
```

##### `resetPointInTime` <a name="resetPointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime"></a>

```java
public void resetPointInTime()
```

##### `resetPreferredZone` <a name="resetPreferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPreferredZone"></a>

```java
public void resetPreferredZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput">allocatedIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput">databaseNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput">pointInTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput">preferredZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput">sourceInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames">databaseNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime">pointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZone">preferredZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">sourceInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedIpRangeInput`<sup>Optional</sup> <a name="allocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput"></a>

```java
public java.lang.String getAllocatedIpRangeInput();
```

- *Type:* java.lang.String

---

##### `databaseNamesInput`<sup>Optional</sup> <a name="databaseNamesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput"></a>

```java
public java.util.List<java.lang.String> getDatabaseNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pointInTimeInput`<sup>Optional</sup> <a name="pointInTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput"></a>

```java
public java.lang.String getPointInTimeInput();
```

- *Type:* java.lang.String

---

##### `preferredZoneInput`<sup>Optional</sup> <a name="preferredZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput"></a>

```java
public java.lang.String getPreferredZoneInput();
```

- *Type:* java.lang.String

---

##### `sourceInstanceNameInput`<sup>Optional</sup> <a name="sourceInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput"></a>

```java
public java.lang.String getSourceInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```java
public java.lang.String getAllocatedIpRange();
```

- *Type:* java.lang.String

---

##### `databaseNames`<sup>Required</sup> <a name="databaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```java
public java.util.List<java.lang.String> getDatabaseNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```java
public java.lang.String getPointInTime();
```

- *Type:* java.lang.String

---

##### `preferredZone`<sup>Required</sup> <a name="preferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZone"></a>

```java
public java.lang.String getPreferredZone();
```

- *Type:* java.lang.String

---

##### `sourceInstanceName`<sup>Required</sup> <a name="sourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```java
public java.lang.String getSourceInstanceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceClone getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---


### SqlDatabaseInstanceIpAddressList <a name="SqlDatabaseInstanceIpAddressList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceIpAddressList;

new SqlDatabaseInstanceIpAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get"></a>

```java
public SqlDatabaseInstanceIpAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SqlDatabaseInstanceIpAddressOutputReference <a name="SqlDatabaseInstanceIpAddressOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceIpAddressOutputReference;

new SqlDatabaseInstanceIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">timeToRetire</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `timeToRetire`<sup>Required</sup> <a name="timeToRetire" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```java
public java.lang.String getTimeToRetire();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a>

---


### SqlDatabaseInstanceReplicaConfigurationOutputReference <a name="SqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceReplicaConfigurationOutputReference;

new SqlDatabaseInstanceReplicaConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval">resetConnectRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath">resetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget">resetFailoverTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod">resetMasterHeartbeatPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher">resetSslCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate">resetVerifyServerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate"></a>

```java
public void resetCaCertificate()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetConnectRetryInterval` <a name="resetConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval"></a>

```java
public void resetConnectRetryInterval()
```

##### `resetDumpFilePath` <a name="resetDumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath"></a>

```java
public void resetDumpFilePath()
```

##### `resetFailoverTarget` <a name="resetFailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget"></a>

```java
public void resetFailoverTarget()
```

##### `resetMasterHeartbeatPeriod` <a name="resetMasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod"></a>

```java
public void resetMasterHeartbeatPeriod()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSslCipher` <a name="resetSslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher"></a>

```java
public void resetSslCipher()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetVerifyServerCertificate` <a name="resetVerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate"></a>

```java
public void resetVerifyServerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput">connectRetryIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput">dumpFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput">failoverTargetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput">masterHeartbeatPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput">sslCipherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput">verifyServerCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">connectRetryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">dumpFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">failoverTarget</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">masterHeartbeatPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">sslCipher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">verifyServerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `connectRetryIntervalInput`<sup>Optional</sup> <a name="connectRetryIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput"></a>

```java
public java.lang.Number getConnectRetryIntervalInput();
```

- *Type:* java.lang.Number

---

##### `dumpFilePathInput`<sup>Optional</sup> <a name="dumpFilePathInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput"></a>

```java
public java.lang.String getDumpFilePathInput();
```

- *Type:* java.lang.String

---

##### `failoverTargetInput`<sup>Optional</sup> <a name="failoverTargetInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput"></a>

```java
public java.lang.Object getFailoverTargetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterHeartbeatPeriodInput`<sup>Optional</sup> <a name="masterHeartbeatPeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput"></a>

```java
public java.lang.Number getMasterHeartbeatPeriodInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `sslCipherInput`<sup>Optional</sup> <a name="sslCipherInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput"></a>

```java
public java.lang.String getSslCipherInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `verifyServerCertificateInput`<sup>Optional</sup> <a name="verifyServerCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput"></a>

```java
public java.lang.Object getVerifyServerCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `connectRetryInterval`<sup>Required</sup> <a name="connectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```java
public java.lang.Number getConnectRetryInterval();
```

- *Type:* java.lang.Number

---

##### `dumpFilePath`<sup>Required</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```java
public java.lang.String getDumpFilePath();
```

- *Type:* java.lang.String

---

##### `failoverTarget`<sup>Required</sup> <a name="failoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```java
public java.lang.Object getFailoverTarget();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterHeartbeatPeriod`<sup>Required</sup> <a name="masterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```java
public java.lang.Number getMasterHeartbeatPeriod();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sslCipher`<sup>Required</sup> <a name="sslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```java
public java.lang.String getSslCipher();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `verifyServerCertificate`<sup>Required</sup> <a name="verifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```java
public java.lang.Object getVerifyServerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceReplicaConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---


### SqlDatabaseInstanceRestoreBackupContextOutputReference <a name="SqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceRestoreBackupContextOutputReference;

new SqlDatabaseInstanceRestoreBackupContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput">backupRunIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">backupRunId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupRunIdInput`<sup>Optional</sup> <a name="backupRunIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput"></a>

```java
public java.lang.Number getBackupRunIdInput();
```

- *Type:* java.lang.Number

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `backupRunId`<sup>Required</sup> <a name="backupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```java
public java.lang.Number getBackupRunId();
```

- *Type:* java.lang.Number

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceRestoreBackupContext getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---


### SqlDatabaseInstanceServerCaCertList <a name="SqlDatabaseInstanceServerCaCertList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceServerCaCertList;

new SqlDatabaseInstanceServerCaCertList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get"></a>

```java
public SqlDatabaseInstanceServerCaCertOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SqlDatabaseInstanceServerCaCertOutputReference <a name="SqlDatabaseInstanceServerCaCertOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceServerCaCertOutputReference;

new SqlDatabaseInstanceServerCaCertOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```java
public java.lang.String getSha1Fingerprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceServerCaCert getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a>

---


### SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference;

new SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsActiveDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference <a name="SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference;

new SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```java
public void resetThreadsPerCore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference;

new SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit">resetRetentionUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionUnit` <a name="resetRetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit"></a>

```java
public void resetRetentionUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput">retainedBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">retainedBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retainedBackupsInput`<sup>Optional</sup> <a name="retainedBackupsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput"></a>

```java
public java.lang.Number getRetainedBackupsInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retainedBackups`<sup>Required</sup> <a name="retainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```java
public java.lang.Number getRetainedBackups();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference;

new SqlDatabaseInstanceSettingsBackupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings">putBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings">resetBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled">resetBinaryLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled">resetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays">resetTransactionLogRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupRetentionSettings` <a name="putBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings"></a>

```java
public void putBackupRetentionSettings(SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `resetBackupRetentionSettings` <a name="resetBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings"></a>

```java
public void resetBackupRetentionSettings()
```

##### `resetBinaryLogEnabled` <a name="resetBinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled"></a>

```java
public void resetBinaryLogEnabled()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPointInTimeRecoveryEnabled` <a name="resetPointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```java
public void resetPointInTimeRecoveryEnabled()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTransactionLogRetentionDays` <a name="resetTransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays"></a>

```java
public void resetTransactionLogRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">backupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput">backupRetentionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput">binaryLogEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput">pointInTimeRecoveryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput">transactionLogRetentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">binaryLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">transactionLogRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupRetentionSettings`<sup>Required</sup> <a name="backupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference getBackupRetentionSettings();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a>

---

##### `backupRetentionSettingsInput`<sup>Optional</sup> <a name="backupRetentionSettingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings getBackupRetentionSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `binaryLogEnabledInput`<sup>Optional</sup> <a name="binaryLogEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput"></a>

```java
public java.lang.Object getBinaryLogEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```java
public java.lang.Object getPointInTimeRecoveryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `transactionLogRetentionDaysInput`<sup>Optional</sup> <a name="transactionLogRetentionDaysInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput"></a>

```java
public java.lang.Number getTransactionLogRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `binaryLogEnabled`<sup>Required</sup> <a name="binaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```java
public java.lang.Object getBinaryLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```java
public java.lang.Object getPointInTimeRecoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `transactionLogRetentionDays`<sup>Required</sup> <a name="transactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```java
public java.lang.Number getTransactionLogRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### SqlDatabaseInstanceSettingsDatabaseFlagsList <a name="SqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsDatabaseFlagsList;

new SqlDatabaseInstanceSettingsDatabaseFlagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```java
public SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>>

---


### SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference;

new SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>

---


### SqlDatabaseInstanceSettingsDataCacheConfigOutputReference <a name="SqlDatabaseInstanceSettingsDataCacheConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference;

new SqlDatabaseInstanceSettingsDataCacheConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled">resetDataCacheEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataCacheEnabled` <a name="resetDataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled"></a>

```java
public void resetDataCacheEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput">dataCacheEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled">dataCacheEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCacheEnabledInput`<sup>Optional</sup> <a name="dataCacheEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput"></a>

```java
public java.lang.Object getDataCacheEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataCacheEnabled`<sup>Required</sup> <a name="dataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled"></a>

```java
public java.lang.Object getDataCacheEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsDataCacheConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---


### SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference;

new SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsDenyMaintenancePeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### SqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="SqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference;

new SqlDatabaseInstanceSettingsInsightsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled">resetQueryInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute">resetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength">resetQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags">resetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress">resetRecordClientAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryInsightsEnabled` <a name="resetQueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled"></a>

```java
public void resetQueryInsightsEnabled()
```

##### `resetQueryPlansPerMinute` <a name="resetQueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```java
public void resetQueryPlansPerMinute()
```

##### `resetQueryStringLength` <a name="resetQueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength"></a>

```java
public void resetQueryStringLength()
```

##### `resetRecordApplicationTags` <a name="resetRecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```java
public void resetRecordApplicationTags()
```

##### `resetRecordClientAddress` <a name="resetRecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress"></a>

```java
public void resetRecordClientAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput">queryInsightsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput">queryPlansPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput">queryStringLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput">recordApplicationTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput">recordClientAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">queryInsightsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInsightsEnabledInput`<sup>Optional</sup> <a name="queryInsightsEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput"></a>

```java
public java.lang.Object getQueryInsightsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryPlansPerMinuteInput`<sup>Optional</sup> <a name="queryPlansPerMinuteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```java
public java.lang.Number getQueryPlansPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `queryStringLengthInput`<sup>Optional</sup> <a name="queryStringLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```java
public java.lang.Number getQueryStringLengthInput();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTagsInput`<sup>Optional</sup> <a name="recordApplicationTagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```java
public java.lang.Object getRecordApplicationTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordClientAddressInput`<sup>Optional</sup> <a name="recordClientAddressInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```java
public java.lang.Object getRecordClientAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryInsightsEnabled`<sup>Required</sup> <a name="queryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```java
public java.lang.Object getQueryInsightsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```java
public java.lang.Number getQueryStringLength();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```java
public java.lang.Object getRecordApplicationTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```java
public java.lang.Object getRecordClientAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsInsightsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList;

new SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```java
public SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>>

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference;

new SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime"></a>

```java
public void resetExpirationTime()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput">expirationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput"></a>

```java
public java.lang.String getExpirationTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference;

new SqlDatabaseInstanceSettingsIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks">putAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange">resetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks">resetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices">resetEnablePrivatePathForGoogleCloudServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled">resetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork">resetPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetRequireSsl">resetRequireSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizedNetworks` <a name="putAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks"></a>

```java
public void putAuthorizedNetworks(IResolvable OR java.util.List<SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>>

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig"></a>

```java
public void putPscConfig(IResolvable OR java.util.List<SqlDatabaseInstanceSettingsIpConfigurationPscConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>>

---

##### `resetAllocatedIpRange` <a name="resetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange"></a>

```java
public void resetAllocatedIpRange()
```

##### `resetAuthorizedNetworks` <a name="resetAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks"></a>

```java
public void resetAuthorizedNetworks()
```

##### `resetEnablePrivatePathForGoogleCloudServices` <a name="resetEnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices"></a>

```java
public void resetEnablePrivatePathForGoogleCloudServices()
```

##### `resetIpv4Enabled` <a name="resetIpv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled"></a>

```java
public void resetIpv4Enabled()
```

##### `resetPrivateNetwork` <a name="resetPrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork"></a>

```java
public void resetPrivateNetwork()
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig"></a>

```java
public void resetPscConfig()
```

##### `resetRequireSsl` <a name="resetRequireSsl" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetRequireSsl"></a>

```java
public void resetRequireSsl()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">authorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput">allocatedIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput">authorizedNetworksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput">enablePrivatePathForGoogleCloudServicesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput">ipv4EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput">privateNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput">pscConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSslInput">requireSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">enablePrivatePathForGoogleCloudServices</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">ipv4Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">privateNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl">requireSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedNetworks`<sup>Required</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```java
public SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList getAuthorizedNetworks();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig"></a>

```java
public SqlDatabaseInstanceSettingsIpConfigurationPscConfigList getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a>

---

##### `allocatedIpRangeInput`<sup>Optional</sup> <a name="allocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput"></a>

```java
public java.lang.String getAllocatedIpRangeInput();
```

- *Type:* java.lang.String

---

##### `authorizedNetworksInput`<sup>Optional</sup> <a name="authorizedNetworksInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput"></a>

```java
public java.lang.Object getAuthorizedNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>>

---

##### `enablePrivatePathForGoogleCloudServicesInput`<sup>Optional</sup> <a name="enablePrivatePathForGoogleCloudServicesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput"></a>

```java
public java.lang.Object getEnablePrivatePathForGoogleCloudServicesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv4EnabledInput`<sup>Optional</sup> <a name="ipv4EnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput"></a>

```java
public java.lang.Object getIpv4EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateNetworkInput`<sup>Optional</sup> <a name="privateNetworkInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput"></a>

```java
public java.lang.String getPrivateNetworkInput();
```

- *Type:* java.lang.String

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput"></a>

```java
public java.lang.Object getPscConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>>

---

##### `requireSslInput`<sup>Optional</sup> <a name="requireSslInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSslInput"></a>

```java
public java.lang.Object getRequireSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```java
public java.lang.String getAllocatedIpRange();
```

- *Type:* java.lang.String

---

##### `enablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="enablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```java
public java.lang.Object getEnablePrivatePathForGoogleCloudServices();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv4Enabled`<sup>Required</sup> <a name="ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```java
public java.lang.Object getIpv4Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateNetwork`<sup>Required</sup> <a name="privateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```java
public java.lang.String getPrivateNetwork();
```

- *Type:* java.lang.String

---

##### `requireSsl`<sup>Required</sup> <a name="requireSsl" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl"></a>

```java
public java.lang.Object getRequireSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsIpConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigList <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get"></a>

```java
public SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>>

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference;

new SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects">resetAllowedConsumerProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled">resetPscEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedConsumerProjects` <a name="resetAllowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects"></a>

```java
public void resetAllowedConsumerProjects()
```

##### `resetPscEnabled` <a name="resetPscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled"></a>

```java
public void resetPscEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput">allowedConsumerProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput">pscEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled">pscEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedConsumerProjectsInput`<sup>Optional</sup> <a name="allowedConsumerProjectsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pscEnabledInput`<sup>Optional</sup> <a name="pscEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput"></a>

```java
public java.lang.Object getPscEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedConsumerProjects`<sup>Required</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pscEnabled`<sup>Required</sup> <a name="pscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled"></a>

```java
public java.lang.Object getPscEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>

---


### SqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="SqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference;

new SqlDatabaseInstanceSettingsLocationPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication">resetFollowGaeApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone">resetSecondaryZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFollowGaeApplication` <a name="resetFollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication"></a>

```java
public void resetFollowGaeApplication()
```

##### `resetSecondaryZone` <a name="resetSecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone"></a>

```java
public void resetSecondaryZone()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput">followGaeApplicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput">secondaryZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">followGaeApplication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">secondaryZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `followGaeApplicationInput`<sup>Optional</sup> <a name="followGaeApplicationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput"></a>

```java
public java.lang.String getFollowGaeApplicationInput();
```

- *Type:* java.lang.String

---

##### `secondaryZoneInput`<sup>Optional</sup> <a name="secondaryZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput"></a>

```java
public java.lang.String getSecondaryZoneInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `followGaeApplication`<sup>Required</sup> <a name="followGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```java
public java.lang.String getFollowGaeApplication();
```

- *Type:* java.lang.String

---

##### `secondaryZone`<sup>Required</sup> <a name="secondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```java
public java.lang.String getSecondaryZone();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsLocationPreference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---


### SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference;

new SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack">resetUpdateTrack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour"></a>

```java
public void resetHour()
```

##### `resetUpdateTrack` <a name="resetUpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack"></a>

```java
public void resetUpdateTrack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput">updateTrackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">updateTrack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `updateTrackInput`<sup>Optional</sup> <a name="updateTrackInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput"></a>

```java
public java.lang.String getUpdateTrackInput();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `updateTrack`<sup>Required</sup> <a name="updateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```java
public java.lang.String getUpdateTrack();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### SqlDatabaseInstanceSettingsOutputReference <a name="SqlDatabaseInstanceSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsOutputReference;

new SqlDatabaseInstanceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig">putActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration">putBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags">putDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig">putDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod">putDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig">putInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference">putLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy">putPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig">putSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy">resetActivationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig">resetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType">resetAvailabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration">resetBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement">resetConnectorEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags">resetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig">resetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod">resetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize">resetDiskAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit">resetDiskAutoresizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize">resetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig">resetInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference">resetLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy">resetPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan">resetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig">resetSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectoryConfig` <a name="putActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig"></a>

```java
public void putActiveDirectoryConfig(SqlDatabaseInstanceSettingsActiveDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures"></a>

```java
public void putAdvancedMachineFeatures(SqlDatabaseInstanceSettingsAdvancedMachineFeatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---

##### `putBackupConfiguration` <a name="putBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration"></a>

```java
public void putBackupConfiguration(SqlDatabaseInstanceSettingsBackupConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `putDatabaseFlags` <a name="putDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags"></a>

```java
public void putDatabaseFlags(IResolvable OR java.util.List<SqlDatabaseInstanceSettingsDatabaseFlags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>>

---

##### `putDataCacheConfig` <a name="putDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig"></a>

```java
public void putDataCacheConfig(SqlDatabaseInstanceSettingsDataCacheConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---

##### `putDenyMaintenancePeriod` <a name="putDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod"></a>

```java
public void putDenyMaintenancePeriod(SqlDatabaseInstanceSettingsDenyMaintenancePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `putInsightsConfig` <a name="putInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig"></a>

```java
public void putInsightsConfig(SqlDatabaseInstanceSettingsInsightsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration"></a>

```java
public void putIpConfiguration(SqlDatabaseInstanceSettingsIpConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `putLocationPreference` <a name="putLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference"></a>

```java
public void putLocationPreference(SqlDatabaseInstanceSettingsLocationPreference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(SqlDatabaseInstanceSettingsMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `putPasswordValidationPolicy` <a name="putPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy"></a>

```java
public void putPasswordValidationPolicy(SqlDatabaseInstanceSettingsPasswordValidationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `putSqlServerAuditConfig` <a name="putSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig"></a>

```java
public void putSqlServerAuditConfig(SqlDatabaseInstanceSettingsSqlServerAuditConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `resetActivationPolicy` <a name="resetActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy"></a>

```java
public void resetActivationPolicy()
```

##### `resetActiveDirectoryConfig` <a name="resetActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig"></a>

```java
public void resetActiveDirectoryConfig()
```

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures"></a>

```java
public void resetAdvancedMachineFeatures()
```

##### `resetAvailabilityType` <a name="resetAvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType"></a>

```java
public void resetAvailabilityType()
```

##### `resetBackupConfiguration` <a name="resetBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration"></a>

```java
public void resetBackupConfiguration()
```

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation"></a>

```java
public void resetCollation()
```

##### `resetConnectorEnforcement` <a name="resetConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement"></a>

```java
public void resetConnectorEnforcement()
```

##### `resetDatabaseFlags` <a name="resetDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```java
public void resetDatabaseFlags()
```

##### `resetDataCacheConfig` <a name="resetDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig"></a>

```java
public void resetDataCacheConfig()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetDenyMaintenancePeriod` <a name="resetDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod"></a>

```java
public void resetDenyMaintenancePeriod()
```

##### `resetDiskAutoresize` <a name="resetDiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize"></a>

```java
public void resetDiskAutoresize()
```

##### `resetDiskAutoresizeLimit` <a name="resetDiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit"></a>

```java
public void resetDiskAutoresizeLimit()
```

##### `resetDiskSize` <a name="resetDiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize"></a>

```java
public void resetDiskSize()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetInsightsConfig` <a name="resetInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig"></a>

```java
public void resetInsightsConfig()
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration"></a>

```java
public void resetIpConfiguration()
```

##### `resetLocationPreference` <a name="resetLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference"></a>

```java
public void resetLocationPreference()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetPasswordValidationPolicy` <a name="resetPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy"></a>

```java
public void resetPasswordValidationPolicy()
```

##### `resetPricingPlan` <a name="resetPricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan"></a>

```java
public void resetPricingPlan()
```

##### `resetSqlServerAuditConfig` <a name="resetSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig"></a>

```java
public void resetSqlServerAuditConfig()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels"></a>

```java
public void resetUserLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">databaseFlags</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig">dataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference">SqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">insightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference">locationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">passwordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">sqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput">activationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput">activeDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput">availabilityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput">backupConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput">collationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput">connectorEnforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput">databaseFlagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput">dataCacheConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput">denyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput">diskAutoresizeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput">diskAutoresizeLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput">diskSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput">insightsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput">locationPreferenceInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput">passwordValidationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput">pricingPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput">sqlServerAuditConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">activationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType">availabilityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">connectorEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">diskAutoresize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">diskAutoresizeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize">diskSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">pricingPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectoryConfig`<sup>Required</sup> <a name="activeDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```java
public SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference getActiveDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a>

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures"></a>

```java
public SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a>

---

##### `backupConfiguration`<sup>Required</sup> <a name="backupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfigurationOutputReference getBackupConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a>

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```java
public SqlDatabaseInstanceSettingsDatabaseFlagsList getDatabaseFlags();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `dataCacheConfig`<sup>Required</sup> <a name="dataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig"></a>

```java
public SqlDatabaseInstanceSettingsDataCacheConfigOutputReference getDataCacheConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference">SqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a>

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```java
public SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference getDenyMaintenancePeriod();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a>

---

##### `insightsConfig`<sup>Required</sup> <a name="insightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```java
public SqlDatabaseInstanceSettingsInsightsConfigOutputReference getInsightsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```java
public SqlDatabaseInstanceSettingsIpConfigurationOutputReference getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a>

---

##### `locationPreference`<sup>Required</sup> <a name="locationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```java
public SqlDatabaseInstanceSettingsLocationPreferenceOutputReference getLocationPreference();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```java
public SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a>

---

##### `passwordValidationPolicy`<sup>Required</sup> <a name="passwordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```java
public SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference getPasswordValidationPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a>

---

##### `sqlServerAuditConfig`<sup>Required</sup> <a name="sqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```java
public SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference getSqlServerAuditConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `activationPolicyInput`<sup>Optional</sup> <a name="activationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput"></a>

```java
public java.lang.String getActivationPolicyInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryConfigInput`<sup>Optional</sup> <a name="activeDirectoryConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput"></a>

```java
public SqlDatabaseInstanceSettingsActiveDirectoryConfig getActiveDirectoryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput"></a>

```java
public SqlDatabaseInstanceSettingsAdvancedMachineFeatures getAdvancedMachineFeaturesInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---

##### `availabilityTypeInput`<sup>Optional</sup> <a name="availabilityTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput"></a>

```java
public java.lang.String getAvailabilityTypeInput();
```

- *Type:* java.lang.String

---

##### `backupConfigurationInput`<sup>Optional</sup> <a name="backupConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput"></a>

```java
public SqlDatabaseInstanceSettingsBackupConfiguration getBackupConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput"></a>

```java
public java.lang.String getCollationInput();
```

- *Type:* java.lang.String

---

##### `connectorEnforcementInput`<sup>Optional</sup> <a name="connectorEnforcementInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput"></a>

```java
public java.lang.String getConnectorEnforcementInput();
```

- *Type:* java.lang.String

---

##### `databaseFlagsInput`<sup>Optional</sup> <a name="databaseFlagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```java
public java.lang.Object getDatabaseFlagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>>

---

##### `dataCacheConfigInput`<sup>Optional</sup> <a name="dataCacheConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput"></a>

```java
public SqlDatabaseInstanceSettingsDataCacheConfig getDataCacheConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Object getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `denyMaintenancePeriodInput`<sup>Optional</sup> <a name="denyMaintenancePeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput"></a>

```java
public SqlDatabaseInstanceSettingsDenyMaintenancePeriod getDenyMaintenancePeriodInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `diskAutoresizeInput`<sup>Optional</sup> <a name="diskAutoresizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput"></a>

```java
public java.lang.Object getDiskAutoresizeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskAutoresizeLimitInput`<sup>Optional</sup> <a name="diskAutoresizeLimitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput"></a>

```java
public java.lang.Number getDiskAutoresizeLimitInput();
```

- *Type:* java.lang.Number

---

##### `diskSizeInput`<sup>Optional</sup> <a name="diskSizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput"></a>

```java
public java.lang.Number getDiskSizeInput();
```

- *Type:* java.lang.Number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `insightsConfigInput`<sup>Optional</sup> <a name="insightsConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput"></a>

```java
public SqlDatabaseInstanceSettingsInsightsConfig getInsightsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput"></a>

```java
public SqlDatabaseInstanceSettingsIpConfiguration getIpConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `locationPreferenceInput`<sup>Optional</sup> <a name="locationPreferenceInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput"></a>

```java
public SqlDatabaseInstanceSettingsLocationPreference getLocationPreferenceInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput"></a>

```java
public SqlDatabaseInstanceSettingsMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `passwordValidationPolicyInput`<sup>Optional</sup> <a name="passwordValidationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput"></a>

```java
public SqlDatabaseInstanceSettingsPasswordValidationPolicy getPasswordValidationPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `pricingPlanInput`<sup>Optional</sup> <a name="pricingPlanInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput"></a>

```java
public java.lang.String getPricingPlanInput();
```

- *Type:* java.lang.String

---

##### `sqlServerAuditConfigInput`<sup>Optional</sup> <a name="sqlServerAuditConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput"></a>

```java
public SqlDatabaseInstanceSettingsSqlServerAuditConfig getSqlServerAuditConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `activationPolicy`<sup>Required</sup> <a name="activationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```java
public java.lang.String getActivationPolicy();
```

- *Type:* java.lang.String

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```java
public java.lang.String getAvailabilityType();
```

- *Type:* java.lang.String

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `connectorEnforcement`<sup>Required</sup> <a name="connectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```java
public java.lang.String getConnectorEnforcement();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskAutoresize`<sup>Required</sup> <a name="diskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```java
public java.lang.Object getDiskAutoresize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskAutoresizeLimit`<sup>Required</sup> <a name="diskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```java
public java.lang.Number getDiskAutoresizeLimit();
```

- *Type:* java.lang.Number

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```java
public java.lang.Number getDiskSize();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```java
public java.lang.String getPricingPlan();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---


### SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference;

new SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity">resetComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring">resetDisallowUsernameSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval">resetPasswordChangeInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval">resetReuseInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComplexity` <a name="resetComplexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity"></a>

```java
public void resetComplexity()
```

##### `resetDisallowUsernameSubstring` <a name="resetDisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring"></a>

```java
public void resetDisallowUsernameSubstring()
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength"></a>

```java
public void resetMinLength()
```

##### `resetPasswordChangeInterval` <a name="resetPasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval"></a>

```java
public void resetPasswordChangeInterval()
```

##### `resetReuseInterval` <a name="resetReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval"></a>

```java
public void resetReuseInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput">complexityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput">disallowUsernameSubstringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput">enablePasswordPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput">passwordChangeIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput">reuseIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">complexity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">disallowUsernameSubstring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">enablePasswordPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">passwordChangeInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">reuseInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `complexityInput`<sup>Optional</sup> <a name="complexityInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput"></a>

```java
public java.lang.String getComplexityInput();
```

- *Type:* java.lang.String

---

##### `disallowUsernameSubstringInput`<sup>Optional</sup> <a name="disallowUsernameSubstringInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput"></a>

```java
public java.lang.Object getDisallowUsernameSubstringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePasswordPolicyInput`<sup>Optional</sup> <a name="enablePasswordPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput"></a>

```java
public java.lang.Object getEnablePasswordPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput"></a>

```java
public java.lang.Number getMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `passwordChangeIntervalInput`<sup>Optional</sup> <a name="passwordChangeIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput"></a>

```java
public java.lang.String getPasswordChangeIntervalInput();
```

- *Type:* java.lang.String

---

##### `reuseIntervalInput`<sup>Optional</sup> <a name="reuseIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput"></a>

```java
public java.lang.Number getReuseIntervalInput();
```

- *Type:* java.lang.Number

---

##### `complexity`<sup>Required</sup> <a name="complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```java
public java.lang.String getComplexity();
```

- *Type:* java.lang.String

---

##### `disallowUsernameSubstring`<sup>Required</sup> <a name="disallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```java
public java.lang.Object getDisallowUsernameSubstring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePasswordPolicy`<sup>Required</sup> <a name="enablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```java
public java.lang.Object getEnablePasswordPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `passwordChangeInterval`<sup>Required</sup> <a name="passwordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```java
public java.lang.String getPasswordChangeInterval();
```

- *Type:* java.lang.String

---

##### `reuseInterval`<sup>Required</sup> <a name="reuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```java
public java.lang.Number getReuseInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsPasswordValidationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference;

new SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval">resetRetentionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval">resetUploadInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetRetentionInterval` <a name="resetRetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval"></a>

```java
public void resetRetentionInterval()
```

##### `resetUploadInterval` <a name="resetUploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval"></a>

```java
public void resetUploadInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput">retentionIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput">uploadIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">uploadInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `retentionIntervalInput`<sup>Optional</sup> <a name="retentionIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput"></a>

```java
public java.lang.String getRetentionIntervalInput();
```

- *Type:* java.lang.String

---

##### `uploadIntervalInput`<sup>Optional</sup> <a name="uploadIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput"></a>

```java
public java.lang.String getUploadIntervalInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```java
public java.lang.String getRetentionInterval();
```

- *Type:* java.lang.String

---

##### `uploadInterval`<sup>Required</sup> <a name="uploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```java
public java.lang.String getUploadInterval();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```java
public SqlDatabaseInstanceSettingsSqlServerAuditConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---


### SqlDatabaseInstanceTimeoutsOutputReference <a name="SqlDatabaseInstanceTimeoutsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_database_instance.SqlDatabaseInstanceTimeoutsOutputReference;

new SqlDatabaseInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---



