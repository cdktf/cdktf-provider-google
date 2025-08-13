# `sccV2ProjectSccBigQueryExport` Submodule <a name="`sccV2ProjectSccBigQueryExport` Submodule" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2ProjectSccBigQueryExport <a name="SccV2ProjectSccBigQueryExport" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export google_scc_v2_project_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExport;

SccV2ProjectSccBigQueryExport.Builder.create(Construct scope, java.lang.String id)
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
    .bigQueryExportId(java.lang.String)
//  .dataset(java.lang.String)
//  .description(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SccV2ProjectSccBigQueryExportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.bigQueryExportId">bigQueryExportId</a></code> | <code>java.lang.String</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#id SccV2ProjectSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#project SccV2ProjectSccBigQueryExport#project}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.bigQueryExportId"></a>

- *Type:* java.lang.String

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#big_query_export_id SccV2ProjectSccBigQueryExport#big_query_export_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#dataset SccV2ProjectSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#description SccV2ProjectSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#filter SccV2ProjectSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#id SccV2ProjectSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.location"></a>

- *Type:* java.lang.String

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#location SccV2ProjectSccBigQueryExport#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#project SccV2ProjectSccBigQueryExport#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#timeouts SccV2ProjectSccBigQueryExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.putTimeouts"></a>

```java
public void putTimeouts(SccV2ProjectSccBigQueryExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a>

---

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2ProjectSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExport;

SccV2ProjectSccBigQueryExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExport;

SccV2ProjectSccBigQueryExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExport;

SccV2ProjectSccBigQueryExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExport;

SccV2ProjectSccBigQueryExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SccV2ProjectSccBigQueryExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SccV2ProjectSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SccV2ProjectSccBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SccV2ProjectSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SccV2ProjectSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.mostRecentEditor">mostRecentEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference">SccV2ProjectSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportIdInput">bigQueryExportIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportId">bigQueryExportId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `mostRecentEditor`<sup>Required</sup> <a name="mostRecentEditor" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.mostRecentEditor"></a>

```java
public java.lang.String getMostRecentEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeouts"></a>

```java
public SccV2ProjectSccBigQueryExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference">SccV2ProjectSccBigQueryExportTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `bigQueryExportIdInput`<sup>Optional</sup> <a name="bigQueryExportIdInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportIdInput"></a>

```java
public java.lang.String getBigQueryExportIdInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.bigQueryExportId"></a>

```java
public java.lang.String getBigQueryExportId();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2ProjectSccBigQueryExportConfig <a name="SccV2ProjectSccBigQueryExportConfig" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExportConfig;

SccV2ProjectSccBigQueryExportConfig.builder()
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
    .bigQueryExportId(java.lang.String)
//  .dataset(java.lang.String)
//  .description(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SccV2ProjectSccBigQueryExportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.bigQueryExportId">bigQueryExportId</a></code> | <code>java.lang.String</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#id SccV2ProjectSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.location">location</a></code> | <code>java.lang.String</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#project SccV2ProjectSccBigQueryExport#project}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.bigQueryExportId"></a>

```java
public java.lang.String getBigQueryExportId();
```

- *Type:* java.lang.String

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#big_query_export_id SccV2ProjectSccBigQueryExport#big_query_export_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#dataset SccV2ProjectSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#description SccV2ProjectSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#filter SccV2ProjectSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#id SccV2ProjectSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#location SccV2ProjectSccBigQueryExport#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#project SccV2ProjectSccBigQueryExport#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportConfig.property.timeouts"></a>

```java
public SccV2ProjectSccBigQueryExportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#timeouts SccV2ProjectSccBigQueryExport#timeouts}

---

### SccV2ProjectSccBigQueryExportTimeouts <a name="SccV2ProjectSccBigQueryExportTimeouts" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExportTimeouts;

SccV2ProjectSccBigQueryExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#create SccV2ProjectSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#delete SccV2ProjectSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#update SccV2ProjectSccBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#create SccV2ProjectSccBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#delete SccV2ProjectSccBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_project_scc_big_query_export#update SccV2ProjectSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2ProjectSccBigQueryExportTimeoutsOutputReference <a name="SccV2ProjectSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_project_scc_big_query_export.SccV2ProjectSccBigQueryExportTimeoutsOutputReference;

new SccV2ProjectSccBigQueryExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2ProjectSccBigQueryExport.SccV2ProjectSccBigQueryExportTimeouts">SccV2ProjectSccBigQueryExportTimeouts</a>

---



