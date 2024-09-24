# `spannerDatabase` Submodule <a name="`spannerDatabase` Submodule" id="@cdktf/provider-google.spannerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerDatabase <a name="SpannerDatabase" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database google_spanner_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabase;

SpannerDatabase.Builder.create(Construct scope, java.lang.String id)
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
//  .databaseDialect(java.lang.String)
//  .ddl(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .enableDropProtection(java.lang.Boolean)
//  .enableDropProtection(IResolvable)
//  .encryptionConfig(SpannerDatabaseEncryptionConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SpannerDatabaseTimeouts)
//  .versionRetentionPeriod(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.databaseDialect">databaseDialect</a></code> | <code>java.lang.String</code> | The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"]. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.ddl">ddl</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of DDL statements to run inside the newly created database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.enableDropProtection">enableDropProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether drop protection is enabled for this database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#id SpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#project SpannerDatabase#project}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>java.lang.String</code> | The retention period for the database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#instance SpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#name SpannerDatabase#name}

---

##### `databaseDialect`<sup>Optional</sup> <a name="databaseDialect" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.databaseDialect"></a>

- *Type:* java.lang.String

The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#database_dialect SpannerDatabase#database_dialect}

---

##### `ddl`<sup>Optional</sup> <a name="ddl" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.ddl"></a>

- *Type:* java.util.List<java.lang.String>

An optional list of DDL statements to run inside the newly created database.

Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#ddl SpannerDatabase#ddl}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the database.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the database,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the database will fail.
When the field is set to false, deleting the database is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#deletion_protection SpannerDatabase#deletion_protection}

---

##### `enableDropProtection`<sup>Optional</sup> <a name="enableDropProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.enableDropProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether drop protection is enabled for this database.

Defaults to false.
Drop protection is different from
the "deletion_protection" attribute in the following ways:
(1) "deletion_protection" only protects the database from deletions in Terraform.
whereas setting “enableDropProtection” to true protects the database from deletions in all interfaces.
(2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the database.
"deletion_protection" attribute does not provide protection against the deletion of the parent instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#enable_drop_protection SpannerDatabase#enable_drop_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#encryption_config SpannerDatabase#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#id SpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#project SpannerDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#timeouts SpannerDatabase#timeouts}

---

##### `versionRetentionPeriod`<sup>Optional</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.versionRetentionPeriod"></a>

- *Type:* java.lang.String

The retention period for the database.

The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to 'ddl' that
update the database's version_retention_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#version_retention_period SpannerDatabase#version_retention_period}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDatabaseDialect">resetDatabaseDialect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDdl">resetDdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEnableDropProtection">resetEnableDropProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetVersionRetentionPeriod">resetVersionRetentionPeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(SpannerDatabaseEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putTimeouts"></a>

```java
public void putTimeouts(SpannerDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

---

##### `resetDatabaseDialect` <a name="resetDatabaseDialect" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDatabaseDialect"></a>

```java
public void resetDatabaseDialect()
```

##### `resetDdl` <a name="resetDdl" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDdl"></a>

```java
public void resetDdl()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetEnableDropProtection` <a name="resetEnableDropProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEnableDropProtection"></a>

```java
public void resetEnableDropProtection()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionRetentionPeriod` <a name="resetVersionRetentionPeriod" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetVersionRetentionPeriod"></a>

```java
public void resetVersionRetentionPeriod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpannerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabase;

SpannerDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabase;

SpannerDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabase;

SpannerDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabase;

SpannerDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpannerDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpannerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpannerDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpannerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpannerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference">SpannerDatabaseEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference">SpannerDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialectInput">databaseDialectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddlInput">ddlInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtectionInput">enableDropProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriodInput">versionRetentionPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialect">databaseDialect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddl">ddl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtection">enableDropProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfig"></a>

```java
public SpannerDatabaseEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference">SpannerDatabaseEncryptionConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeouts"></a>

```java
public SpannerDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference">SpannerDatabaseTimeoutsOutputReference</a>

---

##### `databaseDialectInput`<sup>Optional</sup> <a name="databaseDialectInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialectInput"></a>

```java
public java.lang.String getDatabaseDialectInput();
```

- *Type:* java.lang.String

---

##### `ddlInput`<sup>Optional</sup> <a name="ddlInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddlInput"></a>

```java
public java.util.List<java.lang.String> getDdlInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDropProtectionInput`<sup>Optional</sup> <a name="enableDropProtectionInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtectionInput"></a>

```java
public java.lang.Object getEnableDropProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfigInput"></a>

```java
public SpannerDatabaseEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

---

##### `versionRetentionPeriodInput`<sup>Optional</sup> <a name="versionRetentionPeriodInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriodInput"></a>

```java
public java.lang.String getVersionRetentionPeriodInput();
```

- *Type:* java.lang.String

---

##### `databaseDialect`<sup>Required</sup> <a name="databaseDialect" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialect"></a>

```java
public java.lang.String getDatabaseDialect();
```

- *Type:* java.lang.String

---

##### `ddl`<sup>Required</sup> <a name="ddl" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddl"></a>

```java
public java.util.List<java.lang.String> getDdl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDropProtection`<sup>Required</sup> <a name="enableDropProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtection"></a>

```java
public java.lang.Object getEnableDropProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `versionRetentionPeriod`<sup>Required</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriod"></a>

```java
public java.lang.String getVersionRetentionPeriod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerDatabaseConfig <a name="SpannerDatabaseConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabaseConfig;

SpannerDatabaseConfig.builder()
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
//  .databaseDialect(java.lang.String)
//  .ddl(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .enableDropProtection(java.lang.Boolean)
//  .enableDropProtection(IResolvable)
//  .encryptionConfig(SpannerDatabaseEncryptionConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SpannerDatabaseTimeouts)
//  .versionRetentionPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.databaseDialect">databaseDialect</a></code> | <code>java.lang.String</code> | The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"]. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.ddl">ddl</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of DDL statements to run inside the newly created database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.enableDropProtection">enableDropProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether drop protection is enabled for this database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#id SpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#project SpannerDatabase#project}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>java.lang.String</code> | The retention period for the database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#instance SpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#name SpannerDatabase#name}

---

##### `databaseDialect`<sup>Optional</sup> <a name="databaseDialect" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.databaseDialect"></a>

```java
public java.lang.String getDatabaseDialect();
```

- *Type:* java.lang.String

The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#database_dialect SpannerDatabase#database_dialect}

---

##### `ddl`<sup>Optional</sup> <a name="ddl" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.ddl"></a>

```java
public java.util.List<java.lang.String> getDdl();
```

- *Type:* java.util.List<java.lang.String>

An optional list of DDL statements to run inside the newly created database.

Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#ddl SpannerDatabase#ddl}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the database.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the database,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the database will fail.
When the field is set to false, deleting the database is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#deletion_protection SpannerDatabase#deletion_protection}

---

##### `enableDropProtection`<sup>Optional</sup> <a name="enableDropProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.enableDropProtection"></a>

```java
public java.lang.Object getEnableDropProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether drop protection is enabled for this database.

Defaults to false.
Drop protection is different from
the "deletion_protection" attribute in the following ways:
(1) "deletion_protection" only protects the database from deletions in Terraform.
whereas setting “enableDropProtection” to true protects the database from deletions in all interfaces.
(2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the database.
"deletion_protection" attribute does not provide protection against the deletion of the parent instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#enable_drop_protection SpannerDatabase#enable_drop_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.encryptionConfig"></a>

```java
public SpannerDatabaseEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#encryption_config SpannerDatabase#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#id SpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#project SpannerDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.timeouts"></a>

```java
public SpannerDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#timeouts SpannerDatabase#timeouts}

---

##### `versionRetentionPeriod`<sup>Optional</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.versionRetentionPeriod"></a>

```java
public java.lang.String getVersionRetentionPeriod();
```

- *Type:* java.lang.String

The retention period for the database.

The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to 'ddl' that
update the database's version_retention_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#version_retention_period SpannerDatabase#version_retention_period}

---

### SpannerDatabaseEncryptionConfig <a name="SpannerDatabaseEncryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabaseEncryptionConfig;

SpannerDatabaseEncryptionConfig.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Fully qualified name of the KMS key to use to encrypt this database. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Fully qualified name of the KMS key to use to encrypt this database.

This key must exist
in the same location as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#kms_key_name SpannerDatabase#kms_key_name}

---

### SpannerDatabaseTimeouts <a name="SpannerDatabaseTimeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabaseTimeouts;

SpannerDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#create SpannerDatabase#create}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#delete SpannerDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#update SpannerDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#create SpannerDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#delete SpannerDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/spanner_database#update SpannerDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerDatabaseEncryptionConfigOutputReference <a name="SpannerDatabaseEncryptionConfigOutputReference" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabaseEncryptionConfigOutputReference;

new SpannerDatabaseEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.internalValue"></a>

```java
public SpannerDatabaseEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

---


### SpannerDatabaseTimeoutsOutputReference <a name="SpannerDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.spanner_database.SpannerDatabaseTimeoutsOutputReference;

new SpannerDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

---



