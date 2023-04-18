# `google_bigquery_dataset`

Refer to the Terraform Registory for docs: [`google_bigquery_dataset`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset).

# `bigqueryDataset` Submodule <a name="`bigqueryDataset` Submodule" id="@cdktf/provider-google.bigqueryDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataset <a name="BigqueryDataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset google_bigquery_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDataset;

BigqueryDataset.Builder.create(Construct scope, java.lang.String id)
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
    .datasetId(java.lang.String)
//  .access(IResolvable)
//  .access(java.util.List<BigqueryDatasetAccess>)
//  .defaultCollation(java.lang.String)
//  .defaultEncryptionConfiguration(BigqueryDatasetDefaultEncryptionConfiguration)
//  .defaultPartitionExpirationMs(java.lang.Number)
//  .defaultTableExpirationMs(java.lang.Number)
//  .deleteContentsOnDestroy(java.lang.Boolean)
//  .deleteContentsOnDestroy(IResolvable)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .isCaseInsensitive(java.lang.Boolean)
//  .isCaseInsensitive(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .maxTimeTravelHours(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryDatasetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.datasetId">datasetId</a></code> | <code>java.lang.String</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.access">access</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>></code> | access block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultCollation">defaultCollation</a></code> | <code>java.lang.String</code> | Defines the default collation specification of future tables created in the dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultEncryptionConfiguration">defaultEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a></code> | default_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultPartitionExpirationMs">defaultPartitionExpirationMs</a></code> | <code>java.lang.Number</code> | The default partition expiration for all partitioned tables in the dataset, in milliseconds. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultTableExpirationMs">defaultTableExpirationMs</a></code> | <code>java.lang.Number</code> | The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.deleteContentsOnDestroy">deleteContentsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', delete all the tables in the dataset when destroying the resource; |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#id BigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.isCaseInsensitive">isCaseInsensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the dataset should reside. See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations). |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.maxTimeTravelHours">maxTimeTravelHours</a></code> | <code>java.lang.String</code> | Defines the time travel window in hours. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#project BigqueryDataset#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.datasetId"></a>

- *Type:* java.lang.String

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.access"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#access BigqueryDataset#access}

---

##### `defaultCollation`<sup>Optional</sup> <a name="defaultCollation" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultCollation"></a>

- *Type:* java.lang.String

Defines the default collation specification of future tables created in the dataset.

If a table is created in this dataset without table-level
default collation, then the table inherits the dataset default collation,
which is applied to the string fields that do not have explicit collation
specified. A change to this field affects only tables created afterwards,
and does not alter the existing tables.

The following values are supported:

* 'und:ci': undetermined locale, case insensitive.
* '': empty string. Default to case-sensitive behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_collation BigqueryDataset#default_collation}

---

##### `defaultEncryptionConfiguration`<sup>Optional</sup> <a name="defaultEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a>

default_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_encryption_configuration BigqueryDataset#default_encryption_configuration}

---

##### `defaultPartitionExpirationMs`<sup>Optional</sup> <a name="defaultPartitionExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultPartitionExpirationMs"></a>

- *Type:* java.lang.Number

The default partition expiration for all partitioned tables in the dataset, in milliseconds.

Once this property is set, all newly-created partitioned tables in
the dataset will have an 'expirationMs' property in the 'timePartitioning'
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of 'defaultTableExpirationMs'
for partitioned tables: only one of 'defaultTableExpirationMs' and
'defaultPartitionExpirationMs' will be used for any new partitioned
table. If you provide an explicit 'timePartitioning.expirationMs' when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_partition_expiration_ms BigqueryDataset#default_partition_expiration_ms}

---

##### `defaultTableExpirationMs`<sup>Optional</sup> <a name="defaultTableExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.defaultTableExpirationMs"></a>

- *Type:* java.lang.Number

The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour).

Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_table_expiration_ms BigqueryDataset#default_table_expiration_ms}

---

##### `deleteContentsOnDestroy`<sup>Optional</sup> <a name="deleteContentsOnDestroy" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.deleteContentsOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', delete all the tables in the dataset when destroying the resource;

otherwise,
destroying the resource will fail if tables are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#delete_contents_on_destroy BigqueryDataset#delete_contents_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#description BigqueryDataset#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.friendlyName"></a>

- *Type:* java.lang.String

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#friendly_name BigqueryDataset#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#id BigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCaseInsensitive`<sup>Optional</sup> <a name="isCaseInsensitive" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.isCaseInsensitive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.

By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#is_case_insensitive BigqueryDataset#is_case_insensitive}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#labels BigqueryDataset#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the dataset should reside. See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).

There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.

The default value is multi-regional location 'US'.
Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#location BigqueryDataset#location}

---

##### `maxTimeTravelHours`<sup>Optional</sup> <a name="maxTimeTravelHours" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.maxTimeTravelHours"></a>

- *Type:* java.lang.String

Defines the time travel window in hours.

The value can be from 48 to 168 hours (2 to 7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#max_time_travel_hours BigqueryDataset#max_time_travel_hours}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#project BigqueryDataset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#timeouts BigqueryDataset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putAccess">putAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putDefaultEncryptionConfiguration">putDefaultEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultCollation">resetDefaultCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultEncryptionConfiguration">resetDefaultEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultPartitionExpirationMs">resetDefaultPartitionExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultTableExpirationMs">resetDefaultTableExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDeleteContentsOnDestroy">resetDeleteContentsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetIsCaseInsensitive">resetIsCaseInsensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetMaxTimeTravelHours">resetMaxTimeTravelHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccess` <a name="putAccess" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putAccess"></a>

```java
public void putAccess(IResolvable OR java.util.List<BigqueryDatasetAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putAccess.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>>

---

##### `putDefaultEncryptionConfiguration` <a name="putDefaultEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putDefaultEncryptionConfiguration"></a>

```java
public void putDefaultEncryptionConfiguration(BigqueryDatasetDefaultEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putDefaultEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putTimeouts"></a>

```java
public void putTimeouts(BigqueryDatasetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a>

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetDefaultCollation` <a name="resetDefaultCollation" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultCollation"></a>

```java
public void resetDefaultCollation()
```

##### `resetDefaultEncryptionConfiguration` <a name="resetDefaultEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultEncryptionConfiguration"></a>

```java
public void resetDefaultEncryptionConfiguration()
```

##### `resetDefaultPartitionExpirationMs` <a name="resetDefaultPartitionExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultPartitionExpirationMs"></a>

```java
public void resetDefaultPartitionExpirationMs()
```

##### `resetDefaultTableExpirationMs` <a name="resetDefaultTableExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDefaultTableExpirationMs"></a>

```java
public void resetDefaultTableExpirationMs()
```

##### `resetDeleteContentsOnDestroy` <a name="resetDeleteContentsOnDestroy" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDeleteContentsOnDestroy"></a>

```java
public void resetDeleteContentsOnDestroy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetId"></a>

```java
public void resetId()
```

##### `resetIsCaseInsensitive` <a name="resetIsCaseInsensitive" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetIsCaseInsensitive"></a>

```java
public void resetIsCaseInsensitive()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMaxTimeTravelHours` <a name="resetMaxTimeTravelHours" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetMaxTimeTravelHours"></a>

```java
public void resetMaxTimeTravelHours()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDataset;

BigqueryDataset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDataset;

BigqueryDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDataset;

BigqueryDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.access">access</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList">BigqueryDatasetAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultEncryptionConfiguration">defaultEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference">BigqueryDatasetDefaultEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference">BigqueryDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.accessInput">accessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultCollationInput">defaultCollationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultEncryptionConfigurationInput">defaultEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultPartitionExpirationMsInput">defaultPartitionExpirationMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultTableExpirationMsInput">defaultTableExpirationMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.deleteContentsOnDestroyInput">deleteContentsOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.isCaseInsensitiveInput">isCaseInsensitiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.maxTimeTravelHoursInput">maxTimeTravelHoursInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultCollation">defaultCollation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultPartitionExpirationMs">defaultPartitionExpirationMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultTableExpirationMs">defaultTableExpirationMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.deleteContentsOnDestroy">deleteContentsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.isCaseInsensitive">isCaseInsensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.maxTimeTravelHours">maxTimeTravelHours</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.access"></a>

```java
public BigqueryDatasetAccessList getAccess();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList">BigqueryDatasetAccessList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `defaultEncryptionConfiguration`<sup>Required</sup> <a name="defaultEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultEncryptionConfiguration"></a>

```java
public BigqueryDatasetDefaultEncryptionConfigurationOutputReference getDefaultEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference">BigqueryDatasetDefaultEncryptionConfigurationOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.timeouts"></a>

```java
public BigqueryDatasetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference">BigqueryDatasetTimeoutsOutputReference</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.accessInput"></a>

```java
public java.lang.Object getAccessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `defaultCollationInput`<sup>Optional</sup> <a name="defaultCollationInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultCollationInput"></a>

```java
public java.lang.String getDefaultCollationInput();
```

- *Type:* java.lang.String

---

##### `defaultEncryptionConfigurationInput`<sup>Optional</sup> <a name="defaultEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultEncryptionConfigurationInput"></a>

```java
public BigqueryDatasetDefaultEncryptionConfiguration getDefaultEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a>

---

##### `defaultPartitionExpirationMsInput`<sup>Optional</sup> <a name="defaultPartitionExpirationMsInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultPartitionExpirationMsInput"></a>

```java
public java.lang.Number getDefaultPartitionExpirationMsInput();
```

- *Type:* java.lang.Number

---

##### `defaultTableExpirationMsInput`<sup>Optional</sup> <a name="defaultTableExpirationMsInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultTableExpirationMsInput"></a>

```java
public java.lang.Number getDefaultTableExpirationMsInput();
```

- *Type:* java.lang.Number

---

##### `deleteContentsOnDestroyInput`<sup>Optional</sup> <a name="deleteContentsOnDestroyInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.deleteContentsOnDestroyInput"></a>

```java
public java.lang.Object getDeleteContentsOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isCaseInsensitiveInput`<sup>Optional</sup> <a name="isCaseInsensitiveInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.isCaseInsensitiveInput"></a>

```java
public java.lang.Object getIsCaseInsensitiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxTimeTravelHoursInput`<sup>Optional</sup> <a name="maxTimeTravelHoursInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.maxTimeTravelHoursInput"></a>

```java
public java.lang.String getMaxTimeTravelHoursInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `defaultCollation`<sup>Required</sup> <a name="defaultCollation" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultCollation"></a>

```java
public java.lang.String getDefaultCollation();
```

- *Type:* java.lang.String

---

##### `defaultPartitionExpirationMs`<sup>Required</sup> <a name="defaultPartitionExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultPartitionExpirationMs"></a>

```java
public java.lang.Number getDefaultPartitionExpirationMs();
```

- *Type:* java.lang.Number

---

##### `defaultTableExpirationMs`<sup>Required</sup> <a name="defaultTableExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.defaultTableExpirationMs"></a>

```java
public java.lang.Number getDefaultTableExpirationMs();
```

- *Type:* java.lang.Number

---

##### `deleteContentsOnDestroy`<sup>Required</sup> <a name="deleteContentsOnDestroy" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.deleteContentsOnDestroy"></a>

```java
public java.lang.Object getDeleteContentsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isCaseInsensitive`<sup>Required</sup> <a name="isCaseInsensitive" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.isCaseInsensitive"></a>

```java
public java.lang.Object getIsCaseInsensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxTimeTravelHours`<sup>Required</sup> <a name="maxTimeTravelHours" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.maxTimeTravelHours"></a>

```java
public java.lang.String getMaxTimeTravelHours();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryDataset.BigqueryDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatasetAccess <a name="BigqueryDatasetAccess" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccess;

BigqueryDatasetAccess.builder()
//  .dataset(BigqueryDatasetAccessDataset)
//  .domain(java.lang.String)
//  .groupByEmail(java.lang.String)
//  .role(java.lang.String)
//  .routine(BigqueryDatasetAccessRoutine)
//  .specialGroup(java.lang.String)
//  .userByEmail(java.lang.String)
//  .view(BigqueryDatasetAccessView)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset">BigqueryDatasetAccessDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.domain">domain</a></code> | <code>java.lang.String</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.groupByEmail">groupByEmail</a></code> | <code>java.lang.String</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.role">role</a></code> | <code>java.lang.String</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine">BigqueryDatasetAccessRoutine</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.specialGroup">specialGroup</a></code> | <code>java.lang.String</code> | A special group to grant access to. Possible values include:. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.userByEmail">userByEmail</a></code> | <code>java.lang.String</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView">BigqueryDatasetAccessView</a></code> | view block. |

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.dataset"></a>

```java
public BigqueryDatasetAccessDataset getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset">BigqueryDatasetAccessDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#dataset BigqueryDataset#dataset}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#domain BigqueryDataset#domain}

---

##### `groupByEmail`<sup>Optional</sup> <a name="groupByEmail" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.groupByEmail"></a>

```java
public java.lang.String getGroupByEmail();
```

- *Type:* java.lang.String

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#group_by_email BigqueryDataset#group_by_email}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#role BigqueryDataset#role}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.routine"></a>

```java
public BigqueryDatasetAccessRoutine getRoutine();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine">BigqueryDatasetAccessRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#routine BigqueryDataset#routine}

---

##### `specialGroup`<sup>Optional</sup> <a name="specialGroup" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.specialGroup"></a>

```java
public java.lang.String getSpecialGroup();
```

- *Type:* java.lang.String

A special group to grant access to. Possible values include:.

'projectOwners': Owners of the enclosing project.

'projectReaders': Readers of the enclosing project.

'projectWriters': Writers of the enclosing project.

'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#special_group BigqueryDataset#special_group}

---

##### `userByEmail`<sup>Optional</sup> <a name="userByEmail" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.userByEmail"></a>

```java
public java.lang.String getUserByEmail();
```

- *Type:* java.lang.String

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#user_by_email BigqueryDataset#user_by_email}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess.property.view"></a>

```java
public BigqueryDatasetAccessView getView();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView">BigqueryDatasetAccessView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#view BigqueryDataset#view}

---

### BigqueryDatasetAccessDataset <a name="BigqueryDatasetAccessDataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessDataset;

BigqueryDatasetAccessDataset.builder()
    .dataset(BigqueryDatasetAccessDatasetDataset)
    .targetTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset">BigqueryDatasetAccessDatasetDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset.property.targetTypes">targetTypes</a></code> | <code>java.util.List<java.lang.String></code> | Which resources in the dataset this entry applies to. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset.property.dataset"></a>

```java
public BigqueryDatasetAccessDatasetDataset getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset">BigqueryDatasetAccessDatasetDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#dataset BigqueryDataset#dataset}

---

##### `targetTypes`<sup>Required</sup> <a name="targetTypes" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset.property.targetTypes"></a>

```java
public java.util.List<java.lang.String> getTargetTypes();
```

- *Type:* java.util.List<java.lang.String>

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#target_types BigqueryDataset#target_types}

---

### BigqueryDatasetAccessDatasetDataset <a name="BigqueryDatasetAccessDatasetDataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessDatasetDataset;

BigqueryDatasetAccessDatasetDataset.builder()
    .datasetId(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#project_id BigqueryDataset#project_id}

---

### BigqueryDatasetAccessRoutine <a name="BigqueryDatasetAccessRoutine" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessRoutine;

BigqueryDatasetAccessRoutine.builder()
    .datasetId(java.lang.String)
    .projectId(java.lang.String)
    .routineId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine.property.routineId">routineId</a></code> | <code>java.lang.String</code> | The ID of the routine. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#project_id BigqueryDataset#project_id}

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine.property.routineId"></a>

```java
public java.lang.String getRoutineId();
```

- *Type:* java.lang.String

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#routine_id BigqueryDataset#routine_id}

---

### BigqueryDatasetAccessView <a name="BigqueryDatasetAccessView" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessView;

BigqueryDatasetAccessView.builder()
    .datasetId(java.lang.String)
    .projectId(java.lang.String)
    .tableId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The ID of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#project_id BigqueryDataset#project_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#table_id BigqueryDataset#table_id}

---

### BigqueryDatasetConfig <a name="BigqueryDatasetConfig" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetConfig;

BigqueryDatasetConfig.builder()
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
    .datasetId(java.lang.String)
//  .access(IResolvable)
//  .access(java.util.List<BigqueryDatasetAccess>)
//  .defaultCollation(java.lang.String)
//  .defaultEncryptionConfiguration(BigqueryDatasetDefaultEncryptionConfiguration)
//  .defaultPartitionExpirationMs(java.lang.Number)
//  .defaultTableExpirationMs(java.lang.Number)
//  .deleteContentsOnDestroy(java.lang.Boolean)
//  .deleteContentsOnDestroy(IResolvable)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .isCaseInsensitive(java.lang.Boolean)
//  .isCaseInsensitive(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .maxTimeTravelHours(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryDatasetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.access">access</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>></code> | access block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultCollation">defaultCollation</a></code> | <code>java.lang.String</code> | Defines the default collation specification of future tables created in the dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultEncryptionConfiguration">defaultEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a></code> | default_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultPartitionExpirationMs">defaultPartitionExpirationMs</a></code> | <code>java.lang.Number</code> | The default partition expiration for all partitioned tables in the dataset, in milliseconds. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultTableExpirationMs">defaultTableExpirationMs</a></code> | <code>java.lang.Number</code> | The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.deleteContentsOnDestroy">deleteContentsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', delete all the tables in the dataset when destroying the resource; |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#id BigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.isCaseInsensitive">isCaseInsensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the dataset should reside. See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations). |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.maxTimeTravelHours">maxTimeTravelHours</a></code> | <code>java.lang.String</code> | Defines the time travel window in hours. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#project BigqueryDataset#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.access"></a>

```java
public java.lang.Object getAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#access BigqueryDataset#access}

---

##### `defaultCollation`<sup>Optional</sup> <a name="defaultCollation" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultCollation"></a>

```java
public java.lang.String getDefaultCollation();
```

- *Type:* java.lang.String

Defines the default collation specification of future tables created in the dataset.

If a table is created in this dataset without table-level
default collation, then the table inherits the dataset default collation,
which is applied to the string fields that do not have explicit collation
specified. A change to this field affects only tables created afterwards,
and does not alter the existing tables.

The following values are supported:

* 'und:ci': undetermined locale, case insensitive.
* '': empty string. Default to case-sensitive behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_collation BigqueryDataset#default_collation}

---

##### `defaultEncryptionConfiguration`<sup>Optional</sup> <a name="defaultEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultEncryptionConfiguration"></a>

```java
public BigqueryDatasetDefaultEncryptionConfiguration getDefaultEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a>

default_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_encryption_configuration BigqueryDataset#default_encryption_configuration}

---

##### `defaultPartitionExpirationMs`<sup>Optional</sup> <a name="defaultPartitionExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultPartitionExpirationMs"></a>

```java
public java.lang.Number getDefaultPartitionExpirationMs();
```

- *Type:* java.lang.Number

The default partition expiration for all partitioned tables in the dataset, in milliseconds.

Once this property is set, all newly-created partitioned tables in
the dataset will have an 'expirationMs' property in the 'timePartitioning'
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of 'defaultTableExpirationMs'
for partitioned tables: only one of 'defaultTableExpirationMs' and
'defaultPartitionExpirationMs' will be used for any new partitioned
table. If you provide an explicit 'timePartitioning.expirationMs' when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_partition_expiration_ms BigqueryDataset#default_partition_expiration_ms}

---

##### `defaultTableExpirationMs`<sup>Optional</sup> <a name="defaultTableExpirationMs" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.defaultTableExpirationMs"></a>

```java
public java.lang.Number getDefaultTableExpirationMs();
```

- *Type:* java.lang.Number

The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour).

Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#default_table_expiration_ms BigqueryDataset#default_table_expiration_ms}

---

##### `deleteContentsOnDestroy`<sup>Optional</sup> <a name="deleteContentsOnDestroy" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.deleteContentsOnDestroy"></a>

```java
public java.lang.Object getDeleteContentsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', delete all the tables in the dataset when destroying the resource;

otherwise,
destroying the resource will fail if tables are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#delete_contents_on_destroy BigqueryDataset#delete_contents_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#description BigqueryDataset#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#friendly_name BigqueryDataset#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#id BigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCaseInsensitive`<sup>Optional</sup> <a name="isCaseInsensitive" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.isCaseInsensitive"></a>

```java
public java.lang.Object getIsCaseInsensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.

By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#is_case_insensitive BigqueryDataset#is_case_insensitive}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#labels BigqueryDataset#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the dataset should reside. See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).

There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.

The default value is multi-regional location 'US'.
Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#location BigqueryDataset#location}

---

##### `maxTimeTravelHours`<sup>Optional</sup> <a name="maxTimeTravelHours" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.maxTimeTravelHours"></a>

```java
public java.lang.String getMaxTimeTravelHours();
```

- *Type:* java.lang.String

Defines the time travel window in hours.

The value can be from 48 to 168 hours (2 to 7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#max_time_travel_hours BigqueryDataset#max_time_travel_hours}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#project BigqueryDataset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetConfig.property.timeouts"></a>

```java
public BigqueryDatasetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#timeouts BigqueryDataset#timeouts}

---

### BigqueryDatasetDefaultEncryptionConfiguration <a name="BigqueryDatasetDefaultEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetDefaultEncryptionConfiguration;

BigqueryDatasetDefaultEncryptionConfiguration.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires
access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#kms_key_name BigqueryDataset#kms_key_name}

---

### BigqueryDatasetTimeouts <a name="BigqueryDatasetTimeouts" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetTimeouts;

BigqueryDatasetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#create BigqueryDataset#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#delete BigqueryDataset#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#update BigqueryDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#create BigqueryDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#delete BigqueryDataset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_dataset#update BigqueryDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatasetAccessDatasetDatasetOutputReference <a name="BigqueryDatasetAccessDatasetDatasetOutputReference" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessDatasetDatasetOutputReference;

new BigqueryDatasetAccessDatasetDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset">BigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessDatasetDataset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset">BigqueryDatasetAccessDatasetDataset</a>

---


### BigqueryDatasetAccessDatasetOutputReference <a name="BigqueryDatasetAccessDatasetOutputReference" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessDatasetOutputReference;

new BigqueryDatasetAccessDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.putDataset">putDataset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataset` <a name="putDataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.putDataset"></a>

```java
public void putDataset(BigqueryDatasetAccessDatasetDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset">BigqueryDatasetAccessDatasetDataset</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference">BigqueryDatasetAccessDatasetDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset">BigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.targetTypesInput">targetTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.targetTypes">targetTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset">BigqueryDatasetAccessDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.dataset"></a>

```java
public BigqueryDatasetAccessDatasetDatasetOutputReference getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDatasetOutputReference">BigqueryDatasetAccessDatasetDatasetOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.datasetInput"></a>

```java
public BigqueryDatasetAccessDatasetDataset getDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetDataset">BigqueryDatasetAccessDatasetDataset</a>

---

##### `targetTypesInput`<sup>Optional</sup> <a name="targetTypesInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.targetTypesInput"></a>

```java
public java.util.List<java.lang.String> getTargetTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetTypes`<sup>Required</sup> <a name="targetTypes" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.targetTypes"></a>

```java
public java.util.List<java.lang.String> getTargetTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessDataset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset">BigqueryDatasetAccessDataset</a>

---


### BigqueryDatasetAccessList <a name="BigqueryDatasetAccessList" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessList;

new BigqueryDatasetAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.get"></a>

```java
public BigqueryDatasetAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a>>

---


### BigqueryDatasetAccessOutputReference <a name="BigqueryDatasetAccessOutputReference" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessOutputReference;

new BigqueryDatasetAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putDataset">putDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putRoutine">putRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putView">putView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetGroupByEmail">resetGroupByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetRoutine">resetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetSpecialGroup">resetSpecialGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetUserByEmail">resetUserByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetView">resetView</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataset` <a name="putDataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putDataset"></a>

```java
public void putDataset(BigqueryDatasetAccessDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset">BigqueryDatasetAccessDataset</a>

---

##### `putRoutine` <a name="putRoutine" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putRoutine"></a>

```java
public void putRoutine(BigqueryDatasetAccessRoutine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine">BigqueryDatasetAccessRoutine</a>

---

##### `putView` <a name="putView" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putView"></a>

```java
public void putView(BigqueryDatasetAccessView value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView">BigqueryDatasetAccessView</a>

---

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetGroupByEmail` <a name="resetGroupByEmail" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetGroupByEmail"></a>

```java
public void resetGroupByEmail()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetRoutine"></a>

```java
public void resetRoutine()
```

##### `resetSpecialGroup` <a name="resetSpecialGroup" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetSpecialGroup"></a>

```java
public void resetSpecialGroup()
```

##### `resetUserByEmail` <a name="resetUserByEmail" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetUserByEmail"></a>

```java
public void resetUserByEmail()
```

##### `resetView` <a name="resetView" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.resetView"></a>

```java
public void resetView()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference">BigqueryDatasetAccessDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference">BigqueryDatasetAccessRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference">BigqueryDatasetAccessViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset">BigqueryDatasetAccessDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.groupByEmailInput">groupByEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.routineInput">routineInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine">BigqueryDatasetAccessRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.specialGroupInput">specialGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.userByEmailInput">userByEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.viewInput">viewInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView">BigqueryDatasetAccessView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.groupByEmail">groupByEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.specialGroup">specialGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.userByEmail">userByEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.dataset"></a>

```java
public BigqueryDatasetAccessDatasetOutputReference getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDatasetOutputReference">BigqueryDatasetAccessDatasetOutputReference</a>

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.routine"></a>

```java
public BigqueryDatasetAccessRoutineOutputReference getRoutine();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference">BigqueryDatasetAccessRoutineOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.view"></a>

```java
public BigqueryDatasetAccessViewOutputReference getView();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference">BigqueryDatasetAccessViewOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.datasetInput"></a>

```java
public BigqueryDatasetAccessDataset getDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessDataset">BigqueryDatasetAccessDataset</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `groupByEmailInput`<sup>Optional</sup> <a name="groupByEmailInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.groupByEmailInput"></a>

```java
public java.lang.String getGroupByEmailInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.routineInput"></a>

```java
public BigqueryDatasetAccessRoutine getRoutineInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine">BigqueryDatasetAccessRoutine</a>

---

##### `specialGroupInput`<sup>Optional</sup> <a name="specialGroupInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.specialGroupInput"></a>

```java
public java.lang.String getSpecialGroupInput();
```

- *Type:* java.lang.String

---

##### `userByEmailInput`<sup>Optional</sup> <a name="userByEmailInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.userByEmailInput"></a>

```java
public java.lang.String getUserByEmailInput();
```

- *Type:* java.lang.String

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.viewInput"></a>

```java
public BigqueryDatasetAccessView getViewInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView">BigqueryDatasetAccessView</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `groupByEmail`<sup>Required</sup> <a name="groupByEmail" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.groupByEmail"></a>

```java
public java.lang.String getGroupByEmail();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `specialGroup`<sup>Required</sup> <a name="specialGroup" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.specialGroup"></a>

```java
public java.lang.String getSpecialGroup();
```

- *Type:* java.lang.String

---

##### `userByEmail`<sup>Required</sup> <a name="userByEmail" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.userByEmail"></a>

```java
public java.lang.String getUserByEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccess">BigqueryDatasetAccess</a> OR com.hashicorp.cdktf.IResolvable

---


### BigqueryDatasetAccessRoutineOutputReference <a name="BigqueryDatasetAccessRoutineOutputReference" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessRoutineOutputReference;

new BigqueryDatasetAccessRoutineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.routineIdInput">routineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.routineId">routineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine">BigqueryDatasetAccessRoutine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `routineIdInput`<sup>Optional</sup> <a name="routineIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.routineIdInput"></a>

```java
public java.lang.String getRoutineIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.routineId"></a>

```java
public java.lang.String getRoutineId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutineOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessRoutine getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessRoutine">BigqueryDatasetAccessRoutine</a>

---


### BigqueryDatasetAccessViewOutputReference <a name="BigqueryDatasetAccessViewOutputReference" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetAccessViewOutputReference;

new BigqueryDatasetAccessViewOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView">BigqueryDatasetAccessView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessViewOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessView getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetAccessView">BigqueryDatasetAccessView</a>

---


### BigqueryDatasetDefaultEncryptionConfigurationOutputReference <a name="BigqueryDatasetDefaultEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference;

new BigqueryDatasetDefaultEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetDefaultEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetDefaultEncryptionConfiguration">BigqueryDatasetDefaultEncryptionConfiguration</a>

---


### BigqueryDatasetTimeoutsOutputReference <a name="BigqueryDatasetTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset.BigqueryDatasetTimeoutsOutputReference;

new BigqueryDatasetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataset.BigqueryDatasetTimeouts">BigqueryDatasetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



