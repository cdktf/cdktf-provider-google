# `firestoreDatabase` Submodule <a name="`firestoreDatabase` Submodule" id="@cdktf/provider-google.firestoreDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreDatabase <a name="FirestoreDatabase" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database google_firestore_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabase;

FirestoreDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .locationId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .appEngineIntegrationMode(java.lang.String)
//  .cmekConfig(FirestoreDatabaseCmekConfig)
//  .concurrencyMode(java.lang.String)
//  .databaseEdition(java.lang.String)
//  .deleteProtectionState(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .pointInTimeRecoveryEnablement(java.lang.String)
//  .project(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FirestoreDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.locationId">locationId</a></code> | <code>java.lang.String</code> | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.appEngineIntegrationMode">appEngineIntegrationMode</a></code> | <code>java.lang.String</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.cmekConfig">cmekConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a></code> | cmek_config block. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.concurrencyMode">concurrencyMode</a></code> | <code>java.lang.String</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | The database edition. Possible values: ["STANDARD", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.deleteProtectionState">deleteProtectionState</a></code> | <code>java.lang.String</code> | State of delete protection for the database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Deletion behavior for this database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#id FirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.pointInTimeRecoveryEnablement">pointInTimeRecoveryEnablement</a></code> | <code>java.lang.String</code> | Whether to enable the PITR feature on this database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#project FirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.locationId"></a>

- *Type:* java.lang.String

The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#location_id FirestoreDatabase#location_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#name FirestoreDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#type FirestoreDatabase#type}

---

##### `appEngineIntegrationMode`<sup>Optional</sup> <a name="appEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.appEngineIntegrationMode"></a>

- *Type:* java.lang.String

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#app_engine_integration_mode FirestoreDatabase#app_engine_integration_mode}

---

##### `cmekConfig`<sup>Optional</sup> <a name="cmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.cmekConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

cmek_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#cmek_config FirestoreDatabase#cmek_config}

---

##### `concurrencyMode`<sup>Optional</sup> <a name="concurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.concurrencyMode"></a>

- *Type:* java.lang.String

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#concurrency_mode FirestoreDatabase#concurrency_mode}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.databaseEdition"></a>

- *Type:* java.lang.String

The database edition. Possible values: ["STANDARD", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#database_edition FirestoreDatabase#database_edition}

---

##### `deleteProtectionState`<sup>Optional</sup> <a name="deleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.deleteProtectionState"></a>

- *Type:* java.lang.String

State of delete protection for the database.

When delete protection is enabled, this database cannot be deleted.
The default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#delete_protection_state FirestoreDatabase#delete_protection_state}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Deletion behavior for this database.

If the deletion policy is 'ABANDON', the database will be removed from Terraform state but not deleted from Google Cloud upon destruction.
If the deletion policy is 'DELETE', the database will both be removed from Terraform state and deleted from Google Cloud upon destruction.
The default value is 'ABANDON'.
See also 'delete_protection'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#deletion_policy FirestoreDatabase#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#id FirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pointInTimeRecoveryEnablement`<sup>Optional</sup> <a name="pointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.pointInTimeRecoveryEnablement"></a>

- *Type:* java.lang.String

Whether to enable the PITR feature on this database.

If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#point_in_time_recovery_enablement FirestoreDatabase#point_in_time_recovery_enablement}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#project FirestoreDatabase#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

A map of resource manager tags. Resource manager tag keys
and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored when empty. The field is immutable and causes
resource replacement when mutated. To apply tags to an existing resource, see
the 'google_tags_tag_value' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#tags FirestoreDatabase#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#timeouts FirestoreDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putCmekConfig">putCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetAppEngineIntegrationMode">resetAppEngineIntegrationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetCmekConfig">resetCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetConcurrencyMode">resetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDatabaseEdition">resetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeleteProtectionState">resetDeleteProtectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetPointInTimeRecoveryEnablement">resetPointInTimeRecoveryEnablement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekConfig` <a name="putCmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putCmekConfig"></a>

```java
public void putCmekConfig(FirestoreDatabaseCmekConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putCmekConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts"></a>

```java
public void putTimeouts(FirestoreDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

---

##### `resetAppEngineIntegrationMode` <a name="resetAppEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetAppEngineIntegrationMode"></a>

```java
public void resetAppEngineIntegrationMode()
```

##### `resetCmekConfig` <a name="resetCmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetCmekConfig"></a>

```java
public void resetCmekConfig()
```

##### `resetConcurrencyMode` <a name="resetConcurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetConcurrencyMode"></a>

```java
public void resetConcurrencyMode()
```

##### `resetDatabaseEdition` <a name="resetDatabaseEdition" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDatabaseEdition"></a>

```java
public void resetDatabaseEdition()
```

##### `resetDeleteProtectionState` <a name="resetDeleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeleteProtectionState"></a>

```java
public void resetDeleteProtectionState()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetPointInTimeRecoveryEnablement` <a name="resetPointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetPointInTimeRecoveryEnablement"></a>

```java
public void resetPointInTimeRecoveryEnablement()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetProject"></a>

```java
public void resetProject()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirestoreDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabase;

FirestoreDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabase;

FirestoreDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabase;

FirestoreDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabase;

FirestoreDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirestoreDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FirestoreDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirestoreDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirestoreDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfig">cmekConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference">FirestoreDatabaseCmekConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.earliestVersionTime">earliestVersionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference">FirestoreDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationModeInput">appEngineIntegrationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfigInput">cmekConfigInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyModeInput">concurrencyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEditionInput">databaseEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionStateInput">deleteProtectionStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationIdInput">locationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablementInput">pointInTimeRecoveryEnablementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationMode">appEngineIntegrationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyMode">concurrencyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionState">deleteProtectionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationId">locationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablement">pointInTimeRecoveryEnablement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cmekConfig`<sup>Required</sup> <a name="cmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfig"></a>

```java
public FirestoreDatabaseCmekConfigOutputReference getCmekConfig();
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference">FirestoreDatabaseCmekConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `earliestVersionTime`<sup>Required</sup> <a name="earliestVersionTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.earliestVersionTime"></a>

```java
public java.lang.String getEarliestVersionTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeouts"></a>

```java
public FirestoreDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference">FirestoreDatabaseTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `versionRetentionPeriod`<sup>Required</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.versionRetentionPeriod"></a>

```java
public java.lang.String getVersionRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `appEngineIntegrationModeInput`<sup>Optional</sup> <a name="appEngineIntegrationModeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationModeInput"></a>

```java
public java.lang.String getAppEngineIntegrationModeInput();
```

- *Type:* java.lang.String

---

##### `cmekConfigInput`<sup>Optional</sup> <a name="cmekConfigInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfigInput"></a>

```java
public FirestoreDatabaseCmekConfig getCmekConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

---

##### `concurrencyModeInput`<sup>Optional</sup> <a name="concurrencyModeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyModeInput"></a>

```java
public java.lang.String getConcurrencyModeInput();
```

- *Type:* java.lang.String

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEditionInput"></a>

```java
public java.lang.String getDatabaseEditionInput();
```

- *Type:* java.lang.String

---

##### `deleteProtectionStateInput`<sup>Optional</sup> <a name="deleteProtectionStateInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionStateInput"></a>

```java
public java.lang.String getDeleteProtectionStateInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationIdInput`<sup>Optional</sup> <a name="locationIdInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationIdInput"></a>

```java
public java.lang.String getLocationIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryEnablementInput`<sup>Optional</sup> <a name="pointInTimeRecoveryEnablementInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablementInput"></a>

```java
public java.lang.String getPointInTimeRecoveryEnablementInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `appEngineIntegrationMode`<sup>Required</sup> <a name="appEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationMode"></a>

```java
public java.lang.String getAppEngineIntegrationMode();
```

- *Type:* java.lang.String

---

##### `concurrencyMode`<sup>Required</sup> <a name="concurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyMode"></a>

```java
public java.lang.String getConcurrencyMode();
```

- *Type:* java.lang.String

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

---

##### `deleteProtectionState`<sup>Required</sup> <a name="deleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionState"></a>

```java
public java.lang.String getDeleteProtectionState();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationId"></a>

```java
public java.lang.String getLocationId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryEnablement`<sup>Required</sup> <a name="pointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablement"></a>

```java
public java.lang.String getPointInTimeRecoveryEnablement();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreDatabaseCmekConfig <a name="FirestoreDatabaseCmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabaseCmekConfig;

FirestoreDatabaseCmekConfig.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource ID of a Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The resource ID of a Cloud KMS key.

If set, the database created will
be a Customer-managed Encryption Key (CMEK) database encrypted with
this key. This feature is allowlist only in initial launch.

Only keys in the same location as this database are allowed to be used
for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS
multi-region us. For Firestore's eur3 multi-region, this corresponds to
Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations.

This value should be the KMS key resource ID in the format of
'projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
How to retrieve this resource ID is listed at
https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#kms_key_name FirestoreDatabase#kms_key_name}

---

### FirestoreDatabaseConfig <a name="FirestoreDatabaseConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabaseConfig;

FirestoreDatabaseConfig.builder()
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
    .locationId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .appEngineIntegrationMode(java.lang.String)
//  .cmekConfig(FirestoreDatabaseCmekConfig)
//  .concurrencyMode(java.lang.String)
//  .databaseEdition(java.lang.String)
//  .deleteProtectionState(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .pointInTimeRecoveryEnablement(java.lang.String)
//  .project(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FirestoreDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.locationId">locationId</a></code> | <code>java.lang.String</code> | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.appEngineIntegrationMode">appEngineIntegrationMode</a></code> | <code>java.lang.String</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.cmekConfig">cmekConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a></code> | cmek_config block. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.concurrencyMode">concurrencyMode</a></code> | <code>java.lang.String</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | The database edition. Possible values: ["STANDARD", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deleteProtectionState">deleteProtectionState</a></code> | <code>java.lang.String</code> | State of delete protection for the database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Deletion behavior for this database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#id FirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement">pointInTimeRecoveryEnablement</a></code> | <code>java.lang.String</code> | Whether to enable the PITR feature on this database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#project FirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.locationId"></a>

```java
public java.lang.String getLocationId();
```

- *Type:* java.lang.String

The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#location_id FirestoreDatabase#location_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#name FirestoreDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#type FirestoreDatabase#type}

---

##### `appEngineIntegrationMode`<sup>Optional</sup> <a name="appEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.appEngineIntegrationMode"></a>

```java
public java.lang.String getAppEngineIntegrationMode();
```

- *Type:* java.lang.String

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#app_engine_integration_mode FirestoreDatabase#app_engine_integration_mode}

---

##### `cmekConfig`<sup>Optional</sup> <a name="cmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.cmekConfig"></a>

```java
public FirestoreDatabaseCmekConfig getCmekConfig();
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

cmek_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#cmek_config FirestoreDatabase#cmek_config}

---

##### `concurrencyMode`<sup>Optional</sup> <a name="concurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.concurrencyMode"></a>

```java
public java.lang.String getConcurrencyMode();
```

- *Type:* java.lang.String

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#concurrency_mode FirestoreDatabase#concurrency_mode}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

The database edition. Possible values: ["STANDARD", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#database_edition FirestoreDatabase#database_edition}

---

##### `deleteProtectionState`<sup>Optional</sup> <a name="deleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deleteProtectionState"></a>

```java
public java.lang.String getDeleteProtectionState();
```

- *Type:* java.lang.String

State of delete protection for the database.

When delete protection is enabled, this database cannot be deleted.
The default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#delete_protection_state FirestoreDatabase#delete_protection_state}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Deletion behavior for this database.

If the deletion policy is 'ABANDON', the database will be removed from Terraform state but not deleted from Google Cloud upon destruction.
If the deletion policy is 'DELETE', the database will both be removed from Terraform state and deleted from Google Cloud upon destruction.
The default value is 'ABANDON'.
See also 'delete_protection'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#deletion_policy FirestoreDatabase#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#id FirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pointInTimeRecoveryEnablement`<sup>Optional</sup> <a name="pointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement"></a>

```java
public java.lang.String getPointInTimeRecoveryEnablement();
```

- *Type:* java.lang.String

Whether to enable the PITR feature on this database.

If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#point_in_time_recovery_enablement FirestoreDatabase#point_in_time_recovery_enablement}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#project FirestoreDatabase#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

A map of resource manager tags. Resource manager tag keys
and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored when empty. The field is immutable and causes
resource replacement when mutated. To apply tags to an existing resource, see
the 'google_tags_tag_value' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#tags FirestoreDatabase#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.timeouts"></a>

```java
public FirestoreDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#timeouts FirestoreDatabase#timeouts}

---

### FirestoreDatabaseTimeouts <a name="FirestoreDatabaseTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabaseTimeouts;

FirestoreDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#create FirestoreDatabase#create}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#delete FirestoreDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#update FirestoreDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#create FirestoreDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#delete FirestoreDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firestore_database#update FirestoreDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreDatabaseCmekConfigOutputReference <a name="FirestoreDatabaseCmekConfigOutputReference" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabaseCmekConfigOutputReference;

new FirestoreDatabaseCmekConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion"></a>

```java
public java.util.List<java.lang.String> getActiveKeyVersion();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.internalValue"></a>

```java
public FirestoreDatabaseCmekConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

---


### FirestoreDatabaseTimeoutsOutputReference <a name="FirestoreDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firestore_database.FirestoreDatabaseTimeoutsOutputReference;

new FirestoreDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

---



