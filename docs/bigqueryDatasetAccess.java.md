# `bigqueryDatasetAccess` Submodule <a name="`bigqueryDatasetAccess` Submodule" id="@cdktf/provider-google.bigqueryDatasetAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatasetAccessA <a name="BigqueryDatasetAccessA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access google_bigquery_dataset_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessA;

BigqueryDatasetAccessA.Builder.create(Construct scope, java.lang.String id)
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
//  .dataset(BigqueryDatasetAccessDatasetA)
//  .domain(java.lang.String)
//  .groupByEmail(java.lang.String)
//  .iamMember(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .role(java.lang.String)
//  .routine(BigqueryDatasetAccessRoutineA)
//  .specialGroup(java.lang.String)
//  .timeouts(BigqueryDatasetAccessTimeouts)
//  .userByEmail(java.lang.String)
//  .view(BigqueryDatasetAccessViewA)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.datasetId">datasetId</a></code> | <code>java.lang.String</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.groupByEmail">groupByEmail</a></code> | <code>java.lang.String</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.iamMember">iamMember</a></code> | <code>java.lang.String</code> | Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#id BigqueryDatasetAccessA#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#project BigqueryDatasetAccessA#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.routine">routine</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.specialGroup">specialGroup</a></code> | <code>java.lang.String</code> | A special group to grant access to. Possible values include:. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.userByEmail">userByEmail</a></code> | <code>java.lang.String</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a></code> | view block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.datasetId"></a>

- *Type:* java.lang.String

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.dataset"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset BigqueryDatasetAccessA#dataset}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#domain BigqueryDatasetAccessA#domain}

---

##### `groupByEmail`<sup>Optional</sup> <a name="groupByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.groupByEmail"></a>

- *Type:* java.lang.String

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#group_by_email BigqueryDatasetAccessA#group_by_email}

---

##### `iamMember`<sup>Optional</sup> <a name="iamMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.iamMember"></a>

- *Type:* java.lang.String

Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.

For example: 'allUsers'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#iam_member BigqueryDatasetAccessA#iam_member}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#id BigqueryDatasetAccessA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#project BigqueryDatasetAccessA#project}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#role BigqueryDatasetAccessA#role}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.routine"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#routine BigqueryDatasetAccessA#routine}

---

##### `specialGroup`<sup>Optional</sup> <a name="specialGroup" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.specialGroup"></a>

- *Type:* java.lang.String

A special group to grant access to. Possible values include:.

* 'projectOwners': Owners of the enclosing project.
* 'projectReaders': Readers of the enclosing project.
* 'projectWriters': Writers of the enclosing project.
* 'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#special_group BigqueryDatasetAccessA#special_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#timeouts BigqueryDatasetAccessA#timeouts}

---

##### `userByEmail`<sup>Optional</sup> <a name="userByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.userByEmail"></a>

- *Type:* java.lang.String

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#user_by_email BigqueryDatasetAccessA#user_by_email}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#view BigqueryDatasetAccessA#view}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putDataset">putDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putRoutine">putRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putView">putView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetGroupByEmail">resetGroupByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetIamMember">resetIamMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRoutine">resetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetSpecialGroup">resetSpecialGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetUserByEmail">resetUserByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataset` <a name="putDataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putDataset"></a>

```java
public void putDataset(BigqueryDatasetAccessDatasetA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

---

##### `putRoutine` <a name="putRoutine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putRoutine"></a>

```java
public void putRoutine(BigqueryDatasetAccessRoutineA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putTimeouts"></a>

```java
public void putTimeouts(BigqueryDatasetAccessTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a>

---

##### `putView` <a name="putView" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putView"></a>

```java
public void putView(BigqueryDatasetAccessViewA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

---

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetGroupByEmail` <a name="resetGroupByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetGroupByEmail"></a>

```java
public void resetGroupByEmail()
```

##### `resetIamMember` <a name="resetIamMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetIamMember"></a>

```java
public void resetIamMember()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetProject"></a>

```java
public void resetProject()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRole"></a>

```java
public void resetRole()
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetRoutine"></a>

```java
public void resetRoutine()
```

##### `resetSpecialGroup` <a name="resetSpecialGroup" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetSpecialGroup"></a>

```java
public void resetSpecialGroup()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserByEmail` <a name="resetUserByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetUserByEmail"></a>

```java
public void resetUserByEmail()
```

##### `resetView` <a name="resetView" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.resetView"></a>

```java
public void resetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessA;

BigqueryDatasetAccessA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessA;

BigqueryDatasetAccessA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessA;

BigqueryDatasetAccessA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessA;

BigqueryDatasetAccessA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryDatasetAccessA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryDatasetAccessA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryDatasetAccessA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryDatasetAccessA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.apiUpdatedMember">apiUpdatedMember</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference">BigqueryDatasetAccessDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference">BigqueryDatasetAccessRoutineAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference">BigqueryDatasetAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference">BigqueryDatasetAccessViewAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmailInput">groupByEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMemberInput">iamMemberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routineInput">routineInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroupInput">specialGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmailInput">userByEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.viewInput">viewInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmail">groupByEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMember">iamMember</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroup">specialGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmail">userByEmail</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiUpdatedMember`<sup>Required</sup> <a name="apiUpdatedMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.apiUpdatedMember"></a>

```java
public IResolvable getApiUpdatedMember();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.dataset"></a>

```java
public BigqueryDatasetAccessDatasetAOutputReference getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference">BigqueryDatasetAccessDatasetAOutputReference</a>

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routine"></a>

```java
public BigqueryDatasetAccessRoutineAOutputReference getRoutine();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference">BigqueryDatasetAccessRoutineAOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeouts"></a>

```java
public BigqueryDatasetAccessTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference">BigqueryDatasetAccessTimeoutsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.view"></a>

```java
public BigqueryDatasetAccessViewAOutputReference getView();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference">BigqueryDatasetAccessViewAOutputReference</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetInput"></a>

```java
public BigqueryDatasetAccessDatasetA getDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `groupByEmailInput`<sup>Optional</sup> <a name="groupByEmailInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmailInput"></a>

```java
public java.lang.String getGroupByEmailInput();
```

- *Type:* java.lang.String

---

##### `iamMemberInput`<sup>Optional</sup> <a name="iamMemberInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMemberInput"></a>

```java
public java.lang.String getIamMemberInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.routineInput"></a>

```java
public BigqueryDatasetAccessRoutineA getRoutineInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

---

##### `specialGroupInput`<sup>Optional</sup> <a name="specialGroupInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroupInput"></a>

```java
public java.lang.String getSpecialGroupInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a>

---

##### `userByEmailInput`<sup>Optional</sup> <a name="userByEmailInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmailInput"></a>

```java
public java.lang.String getUserByEmailInput();
```

- *Type:* java.lang.String

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.viewInput"></a>

```java
public BigqueryDatasetAccessViewA getViewInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `groupByEmail`<sup>Required</sup> <a name="groupByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.groupByEmail"></a>

```java
public java.lang.String getGroupByEmail();
```

- *Type:* java.lang.String

---

##### `iamMember`<sup>Required</sup> <a name="iamMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.iamMember"></a>

```java
public java.lang.String getIamMember();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `specialGroup`<sup>Required</sup> <a name="specialGroup" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.specialGroup"></a>

```java
public java.lang.String getSpecialGroup();
```

- *Type:* java.lang.String

---

##### `userByEmail`<sup>Required</sup> <a name="userByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.userByEmail"></a>

```java
public java.lang.String getUserByEmail();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatasetAccessAConfig <a name="BigqueryDatasetAccessAConfig" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessAConfig;

BigqueryDatasetAccessAConfig.builder()
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
//  .dataset(BigqueryDatasetAccessDatasetA)
//  .domain(java.lang.String)
//  .groupByEmail(java.lang.String)
//  .iamMember(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .role(java.lang.String)
//  .routine(BigqueryDatasetAccessRoutineA)
//  .specialGroup(java.lang.String)
//  .timeouts(BigqueryDatasetAccessTimeouts)
//  .userByEmail(java.lang.String)
//  .view(BigqueryDatasetAccessViewA)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.groupByEmail">groupByEmail</a></code> | <code>java.lang.String</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.iamMember">iamMember</a></code> | <code>java.lang.String</code> | Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#id BigqueryDatasetAccessA#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#project BigqueryDatasetAccessA#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.role">role</a></code> | <code>java.lang.String</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.specialGroup">specialGroup</a></code> | <code>java.lang.String</code> | A special group to grant access to. Possible values include:. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.userByEmail">userByEmail</a></code> | <code>java.lang.String</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a></code> | view block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.dataset"></a>

```java
public BigqueryDatasetAccessDatasetA getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset BigqueryDatasetAccessA#dataset}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#domain BigqueryDatasetAccessA#domain}

---

##### `groupByEmail`<sup>Optional</sup> <a name="groupByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.groupByEmail"></a>

```java
public java.lang.String getGroupByEmail();
```

- *Type:* java.lang.String

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#group_by_email BigqueryDatasetAccessA#group_by_email}

---

##### `iamMember`<sup>Optional</sup> <a name="iamMember" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.iamMember"></a>

```java
public java.lang.String getIamMember();
```

- *Type:* java.lang.String

Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.

For example: 'allUsers'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#iam_member BigqueryDatasetAccessA#iam_member}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#id BigqueryDatasetAccessA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#project BigqueryDatasetAccessA#project}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#role BigqueryDatasetAccessA#role}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.routine"></a>

```java
public BigqueryDatasetAccessRoutineA getRoutine();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#routine BigqueryDatasetAccessA#routine}

---

##### `specialGroup`<sup>Optional</sup> <a name="specialGroup" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.specialGroup"></a>

```java
public java.lang.String getSpecialGroup();
```

- *Type:* java.lang.String

A special group to grant access to. Possible values include:.

* 'projectOwners': Owners of the enclosing project.
* 'projectReaders': Readers of the enclosing project.
* 'projectWriters': Writers of the enclosing project.
* 'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#special_group BigqueryDatasetAccessA#special_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.timeouts"></a>

```java
public BigqueryDatasetAccessTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#timeouts BigqueryDatasetAccessA#timeouts}

---

##### `userByEmail`<sup>Optional</sup> <a name="userByEmail" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.userByEmail"></a>

```java
public java.lang.String getUserByEmail();
```

- *Type:* java.lang.String

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#user_by_email BigqueryDatasetAccessA#user_by_email}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessAConfig.property.view"></a>

```java
public BigqueryDatasetAccessViewA getView();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#view BigqueryDatasetAccessA#view}

---

### BigqueryDatasetAccessDatasetA <a name="BigqueryDatasetAccessDatasetA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessDatasetA;

BigqueryDatasetAccessDatasetA.builder()
    .dataset(BigqueryDatasetAccessDatasetDatasetA)
    .targetTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.targetTypes">targetTypes</a></code> | <code>java.util.List<java.lang.String></code> | Which resources in the dataset this entry applies to. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.dataset"></a>

```java
public BigqueryDatasetAccessDatasetDatasetA getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset BigqueryDatasetAccessA#dataset}

---

##### `targetTypes`<sup>Required</sup> <a name="targetTypes" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA.property.targetTypes"></a>

```java
public java.util.List<java.lang.String> getTargetTypes();
```

- *Type:* java.util.List<java.lang.String>

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#target_types BigqueryDatasetAccessA#target_types}

---

### BigqueryDatasetAccessDatasetDatasetA <a name="BigqueryDatasetAccessDatasetDatasetA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessDatasetDatasetA;

BigqueryDatasetAccessDatasetDatasetA.builder()
    .datasetId(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}

---

### BigqueryDatasetAccessRoutineA <a name="BigqueryDatasetAccessRoutineA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessRoutineA;

BigqueryDatasetAccessRoutineA.builder()
    .datasetId(java.lang.String)
    .projectId(java.lang.String)
    .routineId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.routineId">routineId</a></code> | <code>java.lang.String</code> | The ID of the routine. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA.property.routineId"></a>

```java
public java.lang.String getRoutineId();
```

- *Type:* java.lang.String

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#routine_id BigqueryDatasetAccessA#routine_id}

---

### BigqueryDatasetAccessTimeouts <a name="BigqueryDatasetAccessTimeouts" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessTimeouts;

BigqueryDatasetAccessTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#create BigqueryDatasetAccessA#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#delete BigqueryDatasetAccessA#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#create BigqueryDatasetAccessA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#delete BigqueryDatasetAccessA#delete}.

---

### BigqueryDatasetAccessViewA <a name="BigqueryDatasetAccessViewA" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessViewA;

BigqueryDatasetAccessViewA.builder()
    .datasetId(java.lang.String)
    .projectId(java.lang.String)
    .tableId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The ID of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/bigquery_dataset_access#table_id BigqueryDatasetAccessA#table_id}

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatasetAccessDatasetAOutputReference <a name="BigqueryDatasetAccessDatasetAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessDatasetAOutputReference;

new BigqueryDatasetAccessDatasetAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.putDataset">putDataset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataset` <a name="putDataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.putDataset"></a>

```java
public void putDataset(BigqueryDatasetAccessDatasetDatasetA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference">BigqueryDatasetAccessDatasetDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput">targetTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypes">targetTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.dataset"></a>

```java
public BigqueryDatasetAccessDatasetDatasetAOutputReference getDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference">BigqueryDatasetAccessDatasetDatasetAOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.datasetInput"></a>

```java
public BigqueryDatasetAccessDatasetDatasetA getDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

---

##### `targetTypesInput`<sup>Optional</sup> <a name="targetTypesInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput"></a>

```java
public java.util.List<java.lang.String> getTargetTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetTypes`<sup>Required</sup> <a name="targetTypes" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.targetTypes"></a>

```java
public java.util.List<java.lang.String> getTargetTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetAOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessDatasetA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetA">BigqueryDatasetAccessDatasetA</a>

---


### BigqueryDatasetAccessDatasetDatasetAOutputReference <a name="BigqueryDatasetAccessDatasetDatasetAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessDatasetDatasetAOutputReference;

new BigqueryDatasetAccessDatasetDatasetAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessDatasetDatasetA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessDatasetDatasetA">BigqueryDatasetAccessDatasetDatasetA</a>

---


### BigqueryDatasetAccessRoutineAOutputReference <a name="BigqueryDatasetAccessRoutineAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessRoutineAOutputReference;

new BigqueryDatasetAccessRoutineAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput">routineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineId">routineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `routineIdInput`<sup>Optional</sup> <a name="routineIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput"></a>

```java
public java.lang.String getRoutineIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.routineId"></a>

```java
public java.lang.String getRoutineId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineAOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessRoutineA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessRoutineA">BigqueryDatasetAccessRoutineA</a>

---


### BigqueryDatasetAccessTimeoutsOutputReference <a name="BigqueryDatasetAccessTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessTimeoutsOutputReference;

new BigqueryDatasetAccessTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessTimeouts">BigqueryDatasetAccessTimeouts</a>

---


### BigqueryDatasetAccessViewAOutputReference <a name="BigqueryDatasetAccessViewAOutputReference" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_dataset_access.BigqueryDatasetAccessViewAOutputReference;

new BigqueryDatasetAccessViewAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewAOutputReference.property.internalValue"></a>

```java
public BigqueryDatasetAccessViewA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatasetAccess.BigqueryDatasetAccessViewA">BigqueryDatasetAccessViewA</a>

---



