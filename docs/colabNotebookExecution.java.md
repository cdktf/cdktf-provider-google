# `colabNotebookExecution` Submodule <a name="`colabNotebookExecution` Submodule" id="@cdktf/provider-google.colabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabNotebookExecution <a name="ColabNotebookExecution" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .gcsOutputUri(java.lang.String)
    .location(java.lang.String)
//  .dataformRepositorySource(ColabNotebookExecutionDataformRepositorySource)
//  .directNotebookSource(ColabNotebookExecutionDirectNotebookSource)
//  .executionTimeout(java.lang.String)
//  .executionUser(java.lang.String)
//  .gcsNotebookSource(ColabNotebookExecutionGcsNotebookSource)
//  .id(java.lang.String)
//  .notebookExecutionJobId(java.lang.String)
//  .notebookRuntimeTemplateResourceName(java.lang.String)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(ColabNotebookExecutionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionUser">executionUser</a></code> | <code>java.lang.String</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsOutputUri"></a>

- *Type:* java.lang.String

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dataformRepositorySource"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.directNotebookSource"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionTimeout"></a>

- *Type:* java.lang.String

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionUser"></a>

- *Type:* java.lang.String

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsNotebookSource"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookExecutionJobId"></a>

- *Type:* java.lang.String

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName"></a>

- *Type:* java.lang.String

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource">putDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource">putDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource">putGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource">resetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource">resetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser">resetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource">resetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId">resetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">resetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataformRepositorySource` <a name="putDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource"></a>

```java
public void putDataformRepositorySource(ColabNotebookExecutionDataformRepositorySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `putDirectNotebookSource` <a name="putDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource"></a>

```java
public void putDirectNotebookSource(ColabNotebookExecutionDirectNotebookSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `putGcsNotebookSource` <a name="putGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource"></a>

```java
public void putGcsNotebookSource(ColabNotebookExecutionGcsNotebookSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts"></a>

```java
public void putTimeouts(ColabNotebookExecutionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `resetDataformRepositorySource` <a name="resetDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource"></a>

```java
public void resetDataformRepositorySource()
```

##### `resetDirectNotebookSource` <a name="resetDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource"></a>

```java
public void resetDirectNotebookSource()
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout"></a>

```java
public void resetExecutionTimeout()
```

##### `resetExecutionUser` <a name="resetExecutionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser"></a>

```java
public void resetExecutionUser()
```

##### `resetGcsNotebookSource` <a name="resetGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource"></a>

```java
public void resetGcsNotebookSource()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId"></a>

```java
public void resetId()
```

##### `resetNotebookExecutionJobId` <a name="resetNotebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId"></a>

```java
public void resetNotebookExecutionJobId()
```

##### `resetNotebookRuntimeTemplateResourceName` <a name="resetNotebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```java
public void resetNotebookRuntimeTemplateResourceName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject"></a>

```java
public void resetProject()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ColabNotebookExecution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ColabNotebookExecution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ColabNotebookExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput">dataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput">directNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput">executionUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput">gcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput">gcsOutputUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput">notebookExecutionJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">notebookRuntimeTemplateResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataformRepositorySource`<sup>Required</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource"></a>

```java
public ColabNotebookExecutionDataformRepositorySourceOutputReference getDataformRepositorySource();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `directNotebookSource`<sup>Required</sup> <a name="directNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource"></a>

```java
public ColabNotebookExecutionDirectNotebookSourceOutputReference getDirectNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `gcsNotebookSource`<sup>Required</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource"></a>

```java
public ColabNotebookExecutionGcsNotebookSourceOutputReference getGcsNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts"></a>

```java
public ColabNotebookExecutionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `dataformRepositorySourceInput`<sup>Optional</sup> <a name="dataformRepositorySourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```java
public ColabNotebookExecutionDataformRepositorySource getDataformRepositorySourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `directNotebookSourceInput`<sup>Optional</sup> <a name="directNotebookSourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput"></a>

```java
public ColabNotebookExecutionDirectNotebookSource getDirectNotebookSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput"></a>

```java
public java.lang.String getExecutionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `executionUserInput`<sup>Optional</sup> <a name="executionUserInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput"></a>

```java
public java.lang.String getExecutionUserInput();
```

- *Type:* java.lang.String

---

##### `gcsNotebookSourceInput`<sup>Optional</sup> <a name="gcsNotebookSourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```java
public ColabNotebookExecutionGcsNotebookSource getGcsNotebookSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `gcsOutputUriInput`<sup>Optional</sup> <a name="gcsOutputUriInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput"></a>

```java
public java.lang.String getGcsOutputUriInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `notebookExecutionJobIdInput`<sup>Optional</sup> <a name="notebookExecutionJobIdInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```java
public java.lang.String getNotebookExecutionJobIdInput();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

---

##### `executionUser`<sup>Required</sup> <a name="executionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `notebookExecutionJobId`<sup>Required</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId"></a>

```java
public java.lang.String getNotebookExecutionJobId();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ColabNotebookExecutionConfig <a name="ColabNotebookExecutionConfig" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionConfig;

ColabNotebookExecutionConfig.builder()
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
    .displayName(java.lang.String)
    .gcsOutputUri(java.lang.String)
    .location(java.lang.String)
//  .dataformRepositorySource(ColabNotebookExecutionDataformRepositorySource)
//  .directNotebookSource(ColabNotebookExecutionDirectNotebookSource)
//  .executionTimeout(java.lang.String)
//  .executionUser(java.lang.String)
//  .gcsNotebookSource(ColabNotebookExecutionGcsNotebookSource)
//  .id(java.lang.String)
//  .notebookExecutionJobId(java.lang.String)
//  .notebookRuntimeTemplateResourceName(java.lang.String)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(ColabNotebookExecutionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```java
public ColabNotebookExecutionDataformRepositorySource getDataformRepositorySource();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource"></a>

```java
public ColabNotebookExecutionDirectNotebookSource getDirectNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```java
public ColabNotebookExecutionGcsNotebookSource getGcsNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```java
public java.lang.String getNotebookExecutionJobId();
```

- *Type:* java.lang.String

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts"></a>

```java
public ColabNotebookExecutionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

### ColabNotebookExecutionDataformRepositorySource <a name="ColabNotebookExecutionDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionDataformRepositorySource;

ColabNotebookExecutionDataformRepositorySource.builder()
    .dataformRepositoryResourceName(java.lang.String)
//  .commitSha(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}

---

### ColabNotebookExecutionDirectNotebookSource <a name="ColabNotebookExecutionDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionDirectNotebookSource;

ColabNotebookExecutionDirectNotebookSource.builder()
    .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content">content</a></code> | <code>java.lang.String</code> | The base64-encoded contents of the input notebook file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}

---

### ColabNotebookExecutionGcsNotebookSource <a name="ColabNotebookExecutionGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionGcsNotebookSource;

ColabNotebookExecutionGcsNotebookSource.builder()
    .uri(java.lang.String)
//  .generation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri">uri</a></code> | <code>java.lang.String</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation">generation</a></code> | <code>java.lang.String</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}

---

### ColabNotebookExecutionTimeouts <a name="ColabNotebookExecutionTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionTimeouts;

ColabNotebookExecutionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabNotebookExecutionDataformRepositorySourceOutputReference <a name="ColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionDataformRepositorySourceOutputReference;

new ColabNotebookExecutionDataformRepositorySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```java
public void resetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataformRepositoryResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```java
public java.lang.String getCommitShaInput();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="dataformRepositoryResourceNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```java
public java.lang.String getDataformRepositoryResourceNameInput();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionDataformRepositorySource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---


### ColabNotebookExecutionDirectNotebookSourceOutputReference <a name="ColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionDirectNotebookSourceOutputReference;

new ColabNotebookExecutionDirectNotebookSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionDirectNotebookSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---


### ColabNotebookExecutionGcsNotebookSourceOutputReference <a name="ColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionGcsNotebookSourceOutputReference;

new ColabNotebookExecutionGcsNotebookSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```java
public void resetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">generationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```java
public java.lang.String getGenerationInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionGcsNotebookSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---


### ColabNotebookExecutionTimeoutsOutputReference <a name="ColabNotebookExecutionTimeoutsOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_notebook_execution.ColabNotebookExecutionTimeoutsOutputReference;

new ColabNotebookExecutionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---



