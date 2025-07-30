# `storageInsightsDatasetConfig` Submodule <a name="`storageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google.storageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageInsightsDatasetConfig <a name="StorageInsightsDatasetConfig" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_config_id: str,
  identity: StorageInsightsDatasetConfigIdentity,
  location: str,
  retention_period_days: typing.Union[int, float],
  description: str = None,
  exclude_cloud_storage_buckets: StorageInsightsDatasetConfigExcludeCloudStorageBuckets = None,
  exclude_cloud_storage_locations: StorageInsightsDatasetConfigExcludeCloudStorageLocations = None,
  id: str = None,
  include_cloud_storage_buckets: StorageInsightsDatasetConfigIncludeCloudStorageBuckets = None,
  include_cloud_storage_locations: StorageInsightsDatasetConfigIncludeCloudStorageLocations = None,
  include_newly_created_buckets: typing.Union[bool, IResolvable] = None,
  link_dataset: typing.Union[bool, IResolvable] = None,
  organization_number: str = None,
  organization_scope: typing.Union[bool, IResolvable] = None,
  project: str = None,
  source_folders: StorageInsightsDatasetConfigSourceFolders = None,
  source_projects: StorageInsightsDatasetConfigSourceProjects = None,
  timeouts: StorageInsightsDatasetConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.datasetConfigId">dataset_config_id</a></code> | <code>str</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageBuckets">exclude_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageLocations">exclude_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageBuckets">include_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageLocations">include_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.includeNewlyCreatedBuckets">include_newly_created_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.linkDataset">link_dataset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.organizationNumber">organization_number</a></code> | <code>str</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.organizationScope">organization_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.sourceFolders">source_folders</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.sourceProjects">source_projects</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_config_id`<sup>Required</sup> <a name="dataset_config_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.datasetConfigId"></a>

- *Type:* str

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#dataset_config_id StorageInsightsDatasetConfig#dataset_config_id}

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#identity StorageInsightsDatasetConfig#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#location StorageInsightsDatasetConfig#location}

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.retentionPeriodDays"></a>

- *Type:* typing.Union[int, float]

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#retention_period_days StorageInsightsDatasetConfig#retention_period_days}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.description"></a>

- *Type:* str

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#description StorageInsightsDatasetConfig#description}

---

##### `exclude_cloud_storage_buckets`<sup>Optional</sup> <a name="exclude_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_buckets StorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `exclude_cloud_storage_locations`<sup>Optional</sup> <a name="exclude_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_locations StorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_cloud_storage_buckets`<sup>Optional</sup> <a name="include_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_buckets StorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `include_cloud_storage_locations`<sup>Optional</sup> <a name="include_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_locations StorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `include_newly_created_buckets`<sup>Optional</sup> <a name="include_newly_created_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.includeNewlyCreatedBuckets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_newly_created_buckets StorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `link_dataset`<sup>Optional</sup> <a name="link_dataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.linkDataset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#link_dataset StorageInsightsDatasetConfig#link_dataset}

---

##### `organization_number`<sup>Optional</sup> <a name="organization_number" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.organizationNumber"></a>

- *Type:* str

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_number StorageInsightsDatasetConfig#organization_number}

---

##### `organization_scope`<sup>Optional</sup> <a name="organization_scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.organizationScope"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_scope StorageInsightsDatasetConfig#organization_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}.

---

##### `source_folders`<sup>Optional</sup> <a name="source_folders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.sourceFolders"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_folders StorageInsightsDatasetConfig#source_folders}

---

##### `source_projects`<sup>Optional</sup> <a name="source_projects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.sourceProjects"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_projects StorageInsightsDatasetConfig#source_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#timeouts StorageInsightsDatasetConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets">put_exclude_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations">put_exclude_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets">put_include_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations">put_include_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders">put_source_folders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects">put_source_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets">reset_exclude_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageLocations">reset_exclude_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets">reset_include_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageLocations">reset_include_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets">reset_include_newly_created_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetLinkDataset">reset_link_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationNumber">reset_organization_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationScope">reset_organization_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceFolders">reset_source_folders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceProjects">reset_source_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_exclude_cloud_storage_buckets` <a name="put_exclude_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets"></a>

```python
def put_exclude_cloud_storage_buckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageBuckets.parameter.cloudStorageBuckets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

##### `put_exclude_cloud_storage_locations` <a name="put_exclude_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations"></a>

```python
def put_exclude_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putExcludeCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity"></a>

```python
def put_identity(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIdentity.parameter.type"></a>

- *Type:* str

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#type StorageInsightsDatasetConfig#type}

---

##### `put_include_cloud_storage_buckets` <a name="put_include_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets"></a>

```python
def put_include_cloud_storage_buckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageBuckets.parameter.cloudStorageBuckets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

##### `put_include_cloud_storage_locations` <a name="put_include_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations"></a>

```python
def put_include_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putIncludeCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

##### `put_source_folders` <a name="put_source_folders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders"></a>

```python
def put_source_folders(
  folder_numbers: typing.List[str] = None
) -> None
```

###### `folder_numbers`<sup>Optional</sup> <a name="folder_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceFolders.parameter.folderNumbers"></a>

- *Type:* typing.List[str]

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#folder_numbers StorageInsightsDatasetConfig#folder_numbers}

---

##### `put_source_projects` <a name="put_source_projects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects"></a>

```python
def put_source_projects(
  project_numbers: typing.List[str] = None
) -> None
```

###### `project_numbers`<sup>Optional</sup> <a name="project_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putSourceProjects.parameter.projectNumbers"></a>

- *Type:* typing.List[str]

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project_numbers StorageInsightsDatasetConfig#project_numbers}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_cloud_storage_buckets` <a name="reset_exclude_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets"></a>

```python
def reset_exclude_cloud_storage_buckets() -> None
```

##### `reset_exclude_cloud_storage_locations` <a name="reset_exclude_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetExcludeCloudStorageLocations"></a>

```python
def reset_exclude_cloud_storage_locations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_cloud_storage_buckets` <a name="reset_include_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets"></a>

```python
def reset_include_cloud_storage_buckets() -> None
```

##### `reset_include_cloud_storage_locations` <a name="reset_include_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeCloudStorageLocations"></a>

```python
def reset_include_cloud_storage_locations() -> None
```

##### `reset_include_newly_created_buckets` <a name="reset_include_newly_created_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets"></a>

```python
def reset_include_newly_created_buckets() -> None
```

##### `reset_link_dataset` <a name="reset_link_dataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetLinkDataset"></a>

```python
def reset_link_dataset() -> None
```

##### `reset_organization_number` <a name="reset_organization_number" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationNumber"></a>

```python
def reset_organization_number() -> None
```

##### `reset_organization_scope` <a name="reset_organization_scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetOrganizationScope"></a>

```python
def reset_organization_scope() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_source_folders` <a name="reset_source_folders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceFolders"></a>

```python
def reset_source_folders() -> None
```

##### `reset_source_projects` <a name="reset_source_projects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetSourceProjects"></a>

```python
def reset_source_projects() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfig.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageInsightsDatasetConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigState">dataset_config_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">exclude_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocations">exclude_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference">StorageInsightsDatasetConfigIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBuckets">include_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocations">include_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList">StorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFolders">source_folders</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference">StorageInsightsDatasetConfigSourceFoldersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjects">source_projects</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference">StorageInsightsDatasetConfigSourceProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference">StorageInsightsDatasetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigIdInput">dataset_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput">exclude_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput">exclude_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput">include_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput">include_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput">include_newly_created_buckets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDatasetInput">link_dataset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumberInput">organization_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScopeInput">organization_scope_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDaysInput">retention_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFoldersInput">source_folders_input</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjectsInput">source_projects_input</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigId">dataset_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">include_newly_created_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDataset">link_dataset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumber">organization_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScope">organization_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dataset_config_state`<sup>Required</sup> <a name="dataset_config_state" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigState"></a>

```python
dataset_config_state: str
```

- *Type:* str

---

##### `exclude_cloud_storage_buckets`<sup>Required</sup> <a name="exclude_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```python
exclude_cloud_storage_buckets: StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a>

---

##### `exclude_cloud_storage_locations`<sup>Required</sup> <a name="exclude_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```python
exclude_cloud_storage_locations: StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identity"></a>

```python
identity: StorageInsightsDatasetConfigIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference">StorageInsightsDatasetConfigIdentityOutputReference</a>

---

##### `include_cloud_storage_buckets`<sup>Required</sup> <a name="include_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```python
include_cloud_storage_buckets: StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a>

---

##### `include_cloud_storage_locations`<sup>Required</sup> <a name="include_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```python
include_cloud_storage_locations: StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a>

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.link"></a>

```python
link: StorageInsightsDatasetConfigLinkList
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList">StorageInsightsDatasetConfigLinkList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_folders`<sup>Required</sup> <a name="source_folders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFolders"></a>

```python
source_folders: StorageInsightsDatasetConfigSourceFoldersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference">StorageInsightsDatasetConfigSourceFoldersOutputReference</a>

---

##### `source_projects`<sup>Required</sup> <a name="source_projects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjects"></a>

```python
source_projects: StorageInsightsDatasetConfigSourceProjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference">StorageInsightsDatasetConfigSourceProjectsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeouts"></a>

```python
timeouts: StorageInsightsDatasetConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference">StorageInsightsDatasetConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `dataset_config_id_input`<sup>Optional</sup> <a name="dataset_config_id_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```python
dataset_config_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_cloud_storage_buckets_input`<sup>Optional</sup> <a name="exclude_cloud_storage_buckets_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput"></a>

```python
exclude_cloud_storage_buckets_input: StorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `exclude_cloud_storage_locations_input`<sup>Optional</sup> <a name="exclude_cloud_storage_locations_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput"></a>

```python
exclude_cloud_storage_locations_input: StorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.identityInput"></a>

```python
identity_input: StorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_cloud_storage_buckets_input`<sup>Optional</sup> <a name="include_cloud_storage_buckets_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput"></a>

```python
include_cloud_storage_buckets_input: StorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `include_cloud_storage_locations_input`<sup>Optional</sup> <a name="include_cloud_storage_locations_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput"></a>

```python
include_cloud_storage_locations_input: StorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `include_newly_created_buckets_input`<sup>Optional</sup> <a name="include_newly_created_buckets_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput"></a>

```python
include_newly_created_buckets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `link_dataset_input`<sup>Optional</sup> <a name="link_dataset_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDatasetInput"></a>

```python
link_dataset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_number_input`<sup>Optional</sup> <a name="organization_number_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumberInput"></a>

```python
organization_number_input: str
```

- *Type:* str

---

##### `organization_scope_input`<sup>Optional</sup> <a name="organization_scope_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScopeInput"></a>

```python
organization_scope_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_period_days_input`<sup>Optional</sup> <a name="retention_period_days_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDaysInput"></a>

```python
retention_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_folders_input`<sup>Optional</sup> <a name="source_folders_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceFoldersInput"></a>

```python
source_folders_input: StorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---

##### `source_projects_input`<sup>Optional</sup> <a name="source_projects_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.sourceProjectsInput"></a>

```python
source_projects_input: StorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageInsightsDatasetConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>]

---

##### `dataset_config_id`<sup>Required</sup> <a name="dataset_config_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.datasetConfigId"></a>

```python
dataset_config_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_newly_created_buckets`<sup>Required</sup> <a name="include_newly_created_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```python
include_newly_created_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `link_dataset`<sup>Required</sup> <a name="link_dataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.linkDataset"></a>

```python
link_dataset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization_number`<sup>Required</sup> <a name="organization_number" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationNumber"></a>

```python
organization_number: str
```

- *Type:* str

---

##### `organization_scope`<sup>Required</sup> <a name="organization_scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.organizationScope"></a>

```python
organization_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageInsightsDatasetConfigConfig <a name="StorageInsightsDatasetConfigConfig" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_config_id: str,
  identity: StorageInsightsDatasetConfigIdentity,
  location: str,
  retention_period_days: typing.Union[int, float],
  description: str = None,
  exclude_cloud_storage_buckets: StorageInsightsDatasetConfigExcludeCloudStorageBuckets = None,
  exclude_cloud_storage_locations: StorageInsightsDatasetConfigExcludeCloudStorageLocations = None,
  id: str = None,
  include_cloud_storage_buckets: StorageInsightsDatasetConfigIncludeCloudStorageBuckets = None,
  include_cloud_storage_locations: StorageInsightsDatasetConfigIncludeCloudStorageLocations = None,
  include_newly_created_buckets: typing.Union[bool, IResolvable] = None,
  link_dataset: typing.Union[bool, IResolvable] = None,
  organization_number: str = None,
  organization_scope: typing.Union[bool, IResolvable] = None,
  project: str = None,
  source_folders: StorageInsightsDatasetConfigSourceFolders = None,
  source_projects: StorageInsightsDatasetConfigSourceProjects = None,
  timeouts: StorageInsightsDatasetConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.datasetConfigId">dataset_config_id</a></code> | <code>str</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.location">location</a></code> | <code>str</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.description">description</a></code> | <code>str</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets">exclude_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations">exclude_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets">include_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations">include_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets">include_newly_created_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.linkDataset">link_dataset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationNumber">organization_number</a></code> | <code>str</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationScope">organization_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceFolders">source_folders</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceProjects">source_projects</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_config_id`<sup>Required</sup> <a name="dataset_config_id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```python
dataset_config_id: str
```

- *Type:* str

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#dataset_config_id StorageInsightsDatasetConfig#dataset_config_id}

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.identity"></a>

```python
identity: StorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#identity StorageInsightsDatasetConfig#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#location StorageInsightsDatasetConfig#location}

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#retention_period_days StorageInsightsDatasetConfig#retention_period_days}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#description StorageInsightsDatasetConfig#description}

---

##### `exclude_cloud_storage_buckets`<sup>Optional</sup> <a name="exclude_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets"></a>

```python
exclude_cloud_storage_buckets: StorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_buckets StorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `exclude_cloud_storage_locations`<sup>Optional</sup> <a name="exclude_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations"></a>

```python
exclude_cloud_storage_locations: StorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_locations StorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_cloud_storage_buckets`<sup>Optional</sup> <a name="include_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets"></a>

```python
include_cloud_storage_buckets: StorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_buckets StorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `include_cloud_storage_locations`<sup>Optional</sup> <a name="include_cloud_storage_locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations"></a>

```python
include_cloud_storage_locations: StorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_locations StorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `include_newly_created_buckets`<sup>Optional</sup> <a name="include_newly_created_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets"></a>

```python
include_newly_created_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#include_newly_created_buckets StorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `link_dataset`<sup>Optional</sup> <a name="link_dataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.linkDataset"></a>

```python
link_dataset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#link_dataset StorageInsightsDatasetConfig#link_dataset}

---

##### `organization_number`<sup>Optional</sup> <a name="organization_number" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationNumber"></a>

```python
organization_number: str
```

- *Type:* str

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_number StorageInsightsDatasetConfig#organization_number}

---

##### `organization_scope`<sup>Optional</sup> <a name="organization_scope" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.organizationScope"></a>

```python
organization_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#organization_scope StorageInsightsDatasetConfig#organization_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}.

---

##### `source_folders`<sup>Optional</sup> <a name="source_folders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceFolders"></a>

```python
source_folders: StorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_folders StorageInsightsDatasetConfig#source_folders}

---

##### `source_projects`<sup>Optional</sup> <a name="source_projects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.sourceProjects"></a>

```python
source_projects: StorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#source_projects StorageInsightsDatasetConfig#source_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigConfig.property.timeouts"></a>

```python
timeouts: StorageInsightsDatasetConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#timeouts StorageInsightsDatasetConfig#timeouts}

---

### StorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="StorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | cloud_storage_buckets block. |

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets(
  bucket_name: str = None,
  bucket_prefix_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucket_name</a></code> | <code>str</code> | The list of cloud storage bucket names to exclude in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The list of cloud storage bucket names to exclude in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}

---

##### `bucket_prefix_regex`<sup>Optional</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}

---

### StorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="StorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | The list of cloud storage locations to exclude in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

### StorageInsightsDatasetConfigIdentity <a name="StorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.property.type">type</a></code> | <code>str</code> | Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#type StorageInsightsDatasetConfig#type}

---

### StorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="StorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | cloud_storage_buckets block. |

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}

---

### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets(
  bucket_name: str = None,
  bucket_prefix_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucket_name</a></code> | <code>str</code> | The list of cloud storage bucket names to include in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The list of cloud storage bucket names to include in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}

---

##### `bucket_prefix_regex`<sup>Optional</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}

---

### StorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="StorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | The list of cloud storage locations to include in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}

---

### StorageInsightsDatasetConfigLink <a name="StorageInsightsDatasetConfigLink" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink()
```


### StorageInsightsDatasetConfigSourceFolders <a name="StorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders(
  folder_numbers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.property.folderNumbers">folder_numbers</a></code> | <code>typing.List[str]</code> | The list of folder numbers to include in the DatasetConfig. |

---

##### `folder_numbers`<sup>Optional</sup> <a name="folder_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders.property.folderNumbers"></a>

```python
folder_numbers: typing.List[str]
```

- *Type:* typing.List[str]

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#folder_numbers StorageInsightsDatasetConfig#folder_numbers}

---

### StorageInsightsDatasetConfigSourceProjects <a name="StorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects(
  project_numbers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.property.projectNumbers">project_numbers</a></code> | <code>typing.List[str]</code> | The list of project numbers to include in the DatasetConfig. |

---

##### `project_numbers`<sup>Optional</sup> <a name="project_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects.property.projectNumbers"></a>

```python
project_numbers: typing.List[str]
```

- *Type:* typing.List[str]

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#project_numbers StorageInsightsDatasetConfig#project_numbers}

---

### StorageInsightsDatasetConfigTimeouts <a name="StorageInsightsDatasetConfigTimeouts" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


### StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">reset_bucket_prefix_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix_regex` <a name="reset_bucket_prefix_regex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```python
def reset_bucket_prefix_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucket_prefix_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_regex_input`<sup>Optional</sup> <a name="bucket_prefix_regex_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```python
bucket_prefix_regex_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix_regex`<sup>Required</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]

---


### StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">put_cloud_storage_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_storage_buckets` <a name="put_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```python
def put_cloud_storage_buckets(
  value: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloud_storage_buckets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloud_storage_buckets_input`<sup>Optional</sup> <a name="cloud_storage_buckets_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```python
cloud_storage_buckets_input: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageBuckets">StorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigExcludeCloudStorageLocations">StorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### StorageInsightsDatasetConfigIdentityOutputReference <a name="StorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIdentity">StorageInsightsDatasetConfigIdentity</a>

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">reset_bucket_prefix_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix_regex` <a name="reset_bucket_prefix_regex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```python
def reset_bucket_prefix_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucket_prefix_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_regex_input`<sup>Optional</sup> <a name="bucket_prefix_regex_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```python
bucket_prefix_regex_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix_regex`<sup>Required</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]

---


### StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">put_cloud_storage_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_storage_buckets` <a name="put_cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```python
def put_cloud_storage_buckets(
  value: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloud_storage_buckets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloud_storage_buckets_input`<sup>Optional</sup> <a name="cloud_storage_buckets_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```python
cloud_storage_buckets_input: typing.Union[IResolvable, typing.List[StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageBuckets">StorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigIncludeCloudStorageLocations">StorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### StorageInsightsDatasetConfigLinkList <a name="StorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageInsightsDatasetConfigLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageInsightsDatasetConfigLinkOutputReference <a name="StorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.linked">linked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink">StorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `linked`<sup>Required</sup> <a name="linked" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```python
linked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigLink
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigLink">StorageInsightsDatasetConfigLink</a>

---


### StorageInsightsDatasetConfigSourceFoldersOutputReference <a name="StorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers">reset_folder_numbers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_folder_numbers` <a name="reset_folder_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers"></a>

```python
def reset_folder_numbers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput">folder_numbers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">folder_numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `folder_numbers_input`<sup>Optional</sup> <a name="folder_numbers_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput"></a>

```python
folder_numbers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `folder_numbers`<sup>Required</sup> <a name="folder_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```python
folder_numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceFolders">StorageInsightsDatasetConfigSourceFolders</a>

---


### StorageInsightsDatasetConfigSourceProjectsOutputReference <a name="StorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers">reset_project_numbers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_numbers` <a name="reset_project_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers"></a>

```python
def reset_project_numbers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput">project_numbers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">project_numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_numbers_input`<sup>Optional</sup> <a name="project_numbers_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput"></a>

```python
project_numbers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_numbers`<sup>Required</sup> <a name="project_numbers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```python
project_numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```python
internal_value: StorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigSourceProjects">StorageInsightsDatasetConfigSourceProjects</a>

---


### StorageInsightsDatasetConfigTimeoutsOutputReference <a name="StorageInsightsDatasetConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_insights_dataset_config

storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageInsightsDatasetConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageInsightsDatasetConfig.StorageInsightsDatasetConfigTimeouts">StorageInsightsDatasetConfigTimeouts</a>]

---



