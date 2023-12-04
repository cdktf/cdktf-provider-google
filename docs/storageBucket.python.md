# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-google.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-google.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  autoclass: StorageBucketAutoclass = None,
  cors: typing.Union[IResolvable, typing.List[StorageBucketCors]] = None,
  custom_placement_config: StorageBucketCustomPlacementConfig = None,
  default_event_based_hold: typing.Union[bool, IResolvable] = None,
  enable_object_retention: typing.Union[bool, IResolvable] = None,
  encryption: StorageBucketEncryption = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[StorageBucketLifecycleRule]] = None,
  logging: StorageBucketLogging = None,
  project: str = None,
  public_access_prevention: str = None,
  requester_pays: typing.Union[bool, IResolvable] = None,
  retention_policy: StorageBucketRetentionPolicy = None,
  storage_class: str = None,
  timeouts: StorageBucketTimeouts = None,
  uniform_bucket_level_access: typing.Union[bool, IResolvable] = None,
  versioning: StorageBucketVersioning = None,
  website: StorageBucketWebsite = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.location">location</a></code> | <code>str</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.cors">cors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]</code> | cors block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.customPlacementConfig">custom_placement_config</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.defaultEventBasedHold">default_event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.enableObjectRetention">enable_object_retention</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#id StorageBucket#id}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.publicAccessPrevention">public_access_prevention</a></code> | <code>str</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.uniformBucketLevelAccess">uniform_bucket_level_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | website block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.location"></a>

- *Type:* str

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#location StorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.name"></a>

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.autoclass"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#autoclass StorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.cors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#cors StorageBucket#cors}

---

##### `custom_placement_config`<sup>Optional</sup> <a name="custom_placement_config" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.customPlacementConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#custom_placement_config StorageBucket#custom_placement_config}

---

##### `default_event_based_hold`<sup>Optional</sup> <a name="default_event_based_hold" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.defaultEventBasedHold"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}

---

##### `enable_object_retention`<sup>Optional</sup> <a name="enable_object_retention" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.enableObjectRetention"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#enable_object_retention StorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#encryption StorageBucket#encryption}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#force_destroy StorageBucket#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#id StorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#labels StorageBucket#labels}

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#logging StorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#project StorageBucket#project}

---

##### `public_access_prevention`<sup>Optional</sup> <a name="public_access_prevention" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.publicAccessPrevention"></a>

- *Type:* str

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#public_access_prevention StorageBucket#public_access_prevention}

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.requesterPays"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#requester_pays StorageBucket#requester_pays}

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#retention_policy StorageBucket#retention_policy}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.storageClass"></a>

- *Type:* str

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#timeouts StorageBucket#timeouts}

---

##### `uniform_bucket_level_access`<sup>Optional</sup> <a name="uniform_bucket_level_access" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.uniformBucketLevelAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#versioning StorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#website StorageBucket#website}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass">put_autoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig">put_custom_placement_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule">put_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putVersioning">put_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putWebsite">put_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass">reset_autoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig">reset_custom_placement_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold">reset_default_event_based_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention">reset_enable_object_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule">reset_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention">reset_public_access_prevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays">reset_requester_pays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess">reset_uniform_bucket_level_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning">reset_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite">reset_website</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageBucket.StorageBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoclass` <a name="put_autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass"></a>

```python
def put_autoclass(
  enabled: typing.Union[bool, IResolvable],
  terminal_storage_class: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

###### `terminal_storage_class`<sup>Optional</sup> <a name="terminal_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass.parameter.terminalStorageClass"></a>

- *Type:* str

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#terminal_storage_class StorageBucket#terminal_storage_class}

---

##### `put_cors` <a name="put_cors" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors"></a>

```python
def put_cors(
  value: typing.Union[IResolvable, typing.List[StorageBucketCors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]

---

##### `put_custom_placement_config` <a name="put_custom_placement_config" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig"></a>

```python
def put_custom_placement_config(
  data_locations: typing.List[str]
) -> None
```

###### `data_locations`<sup>Required</sup> <a name="data_locations" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig.parameter.dataLocations"></a>

- *Type:* typing.List[str]

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#data_locations StorageBucket#data_locations}

---

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption"></a>

```python
def put_encryption(
  default_kms_key_name: str
) -> None
```

###### `default_kms_key_name`<sup>Required</sup> <a name="default_kms_key_name" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption.parameter.defaultKmsKeyName"></a>

- *Type:* str

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#default_kms_key_name StorageBucket#default_kms_key_name}

---

##### `put_lifecycle_rule` <a name="put_lifecycle_rule" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule"></a>

```python
def put_lifecycle_rule(
  value: typing.Union[IResolvable, typing.List[StorageBucketLifecycleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging"></a>

```python
def put_logging(
  log_bucket: str,
  log_object_prefix: str = None
) -> None
```

###### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging.parameter.logBucket"></a>

- *Type:* str

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#log_bucket StorageBucket#log_bucket}

---

###### `log_object_prefix`<sup>Optional</sup> <a name="log_object_prefix" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging.parameter.logObjectPrefix"></a>

- *Type:* str

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#log_object_prefix StorageBucket#log_object_prefix}

---

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy"></a>

```python
def put_retention_policy(
  retention_period: typing.Union[int, float],
  is_locked: typing.Union[bool, IResolvable] = None
) -> None
```

###### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#retention_period StorageBucket#retention_period}

---

###### `is_locked`<sup>Optional</sup> <a name="is_locked" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy.parameter.isLocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#is_locked StorageBucket#is_locked}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#create StorageBucket#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#read StorageBucket#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#update StorageBucket#update}.

---

##### `put_versioning` <a name="put_versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning"></a>

```python
def put_versioning(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

##### `put_website` <a name="put_website" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite"></a>

```python
def put_website(
  main_page_suffix: str = None,
  not_found_page: str = None
) -> None
```

###### `main_page_suffix`<sup>Optional</sup> <a name="main_page_suffix" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite.parameter.mainPageSuffix"></a>

- *Type:* str

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#main_page_suffix StorageBucket#main_page_suffix}

---

###### `not_found_page`<sup>Optional</sup> <a name="not_found_page" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite.parameter.notFoundPage"></a>

- *Type:* str

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#not_found_page StorageBucket#not_found_page}

---

##### `reset_autoclass` <a name="reset_autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass"></a>

```python
def reset_autoclass() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_custom_placement_config` <a name="reset_custom_placement_config" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig"></a>

```python
def reset_custom_placement_config() -> None
```

##### `reset_default_event_based_hold` <a name="reset_default_event_based_hold" id="@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold"></a>

```python
def reset_default_event_based_hold() -> None
```

##### `reset_enable_object_retention` <a name="reset_enable_object_retention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention"></a>

```python
def reset_enable_object_retention() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageBucket.StorageBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lifecycle_rule` <a name="reset_lifecycle_rule" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule"></a>

```python
def reset_lifecycle_rule() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.storageBucket.StorageBucket.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_public_access_prevention` <a name="reset_public_access_prevention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention"></a>

```python
def reset_public_access_prevention() -> None
```

##### `reset_requester_pays` <a name="reset_requester_pays" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays"></a>

```python
def reset_requester_pays() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_uniform_bucket_level_access` <a name="reset_uniform_bucket_level_access" id="@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess"></a>

```python
def reset_uniform_bucket_level_access() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning"></a>

```python
def reset_versioning() -> None
```

##### `reset_website` <a name="reset_website" id="@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite"></a>

```python
def reset_website() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig">custom_placement_config</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput">autoclass_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput">cors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput">custom_placement_config_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput">default_event_based_hold_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput">enable_object_retention_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput">lifecycle_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput">public_access_prevention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput">requester_pays_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput">uniform_bucket_level_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput">versioning_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput">website_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold">default_event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention">enable_object_retention</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention">public_access_prevention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess">uniform_bucket_level_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBucket.StorageBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoclass`<sup>Required</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass"></a>

```python
autoclass: StorageBucketAutoclassOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cors"></a>

```python
cors: StorageBucketCorsList
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a>

---

##### `custom_placement_config`<sup>Required</sup> <a name="custom_placement_config" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig"></a>

```python
custom_placement_config: StorageBucketCustomPlacementConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryption"></a>

```python
encryption: StorageBucketEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a>

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule"></a>

```python
lifecycle_rule: StorageBucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucket.property.logging"></a>

```python
logging: StorageBucketLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a>

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy"></a>

```python
retention_policy: StorageBucketRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts"></a>

```python
timeouts: StorageBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.storageBucket.StorageBucket.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioning"></a>

```python
versioning: StorageBucketVersioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucket.property.website"></a>

```python
website: StorageBucketWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a>

---

##### `autoclass_input`<sup>Optional</sup> <a name="autoclass_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput"></a>

```python
autoclass_input: StorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput"></a>

```python
cors_input: typing.Union[IResolvable, typing.List[StorageBucketCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]

---

##### `custom_placement_config_input`<sup>Optional</sup> <a name="custom_placement_config_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput"></a>

```python
custom_placement_config_input: StorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `default_event_based_hold_input`<sup>Optional</sup> <a name="default_event_based_hold_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput"></a>

```python
default_event_based_hold_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_object_retention_input`<sup>Optional</sup> <a name="enable_object_retention_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput"></a>

```python
enable_object_retention_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput"></a>

```python
encryption_input: StorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lifecycle_rule_input`<sup>Optional</sup> <a name="lifecycle_rule_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput"></a>

```python
lifecycle_rule_input: typing.Union[IResolvable, typing.List[StorageBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput"></a>

```python
logging_input: StorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `public_access_prevention_input`<sup>Optional</sup> <a name="public_access_prevention_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput"></a>

```python
public_access_prevention_input: str
```

- *Type:* str

---

##### `requester_pays_input`<sup>Optional</sup> <a name="requester_pays_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput"></a>

```python
requester_pays_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput"></a>

```python
retention_policy_input: StorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>]

---

##### `uniform_bucket_level_access_input`<sup>Optional</sup> <a name="uniform_bucket_level_access_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput"></a>

```python
uniform_bucket_level_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput"></a>

```python
versioning_input: StorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `website_input`<sup>Optional</sup> <a name="website_input" id="@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput"></a>

```python
website_input: StorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `default_event_based_hold`<sup>Required</sup> <a name="default_event_based_hold" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold"></a>

```python
default_event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_object_retention`<sup>Required</sup> <a name="enable_object_retention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention"></a>

```python
enable_object_retention: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucket.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucket.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `public_access_prevention`<sup>Required</sup> <a name="public_access_prevention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention"></a>

```python
public_access_prevention: str
```

- *Type:* str

---

##### `requester_pays`<sup>Required</sup> <a name="requester_pays" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays"></a>

```python
requester_pays: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `uniform_bucket_level_access`<sup>Required</sup> <a name="uniform_bucket_level_access" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess"></a>

```python
uniform_bucket_level_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketAutoclass <a name="StorageBucketAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketAutoclass(
  enabled: typing.Union[bool, IResolvable],
  terminal_storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass">terminal_storage_class</a></code> | <code>str</code> | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

##### `terminal_storage_class`<sup>Optional</sup> <a name="terminal_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass"></a>

```python
terminal_storage_class: str
```

- *Type:* str

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#terminal_storage_class StorageBucket#terminal_storage_class}

---

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  autoclass: StorageBucketAutoclass = None,
  cors: typing.Union[IResolvable, typing.List[StorageBucketCors]] = None,
  custom_placement_config: StorageBucketCustomPlacementConfig = None,
  default_event_based_hold: typing.Union[bool, IResolvable] = None,
  enable_object_retention: typing.Union[bool, IResolvable] = None,
  encryption: StorageBucketEncryption = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[StorageBucketLifecycleRule]] = None,
  logging: StorageBucketLogging = None,
  project: str = None,
  public_access_prevention: str = None,
  requester_pays: typing.Union[bool, IResolvable] = None,
  retention_policy: StorageBucketRetentionPolicy = None,
  storage_class: str = None,
  timeouts: StorageBucketTimeouts = None,
  uniform_bucket_level_access: typing.Union[bool, IResolvable] = None,
  versioning: StorageBucketVersioning = None,
  website: StorageBucketWebsite = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location">location</a></code> | <code>str</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name">name</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors">cors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]</code> | cors block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig">custom_placement_config</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold">default_event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention">enable_object_retention</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#id StorageBucket#id}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention">public_access_prevention</a></code> | <code>str</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass">storage_class</a></code> | <code>str</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess">uniform_bucket_level_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#location StorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass"></a>

```python
autoclass: StorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#autoclass StorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors"></a>

```python
cors: typing.Union[IResolvable, typing.List[StorageBucketCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#cors StorageBucket#cors}

---

##### `custom_placement_config`<sup>Optional</sup> <a name="custom_placement_config" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig"></a>

```python
custom_placement_config: StorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#custom_placement_config StorageBucket#custom_placement_config}

---

##### `default_event_based_hold`<sup>Optional</sup> <a name="default_event_based_hold" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold"></a>

```python
default_event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}

---

##### `enable_object_retention`<sup>Optional</sup> <a name="enable_object_retention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention"></a>

```python
enable_object_retention: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#enable_object_retention StorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption"></a>

```python
encryption: StorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#encryption StorageBucket#encryption}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#force_destroy StorageBucket#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#id StorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#labels StorageBucket#labels}

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule"></a>

```python
lifecycle_rule: typing.Union[IResolvable, typing.List[StorageBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging"></a>

```python
logging: StorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#logging StorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#project StorageBucket#project}

---

##### `public_access_prevention`<sup>Optional</sup> <a name="public_access_prevention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention"></a>

```python
public_access_prevention: str
```

- *Type:* str

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#public_access_prevention StorageBucket#public_access_prevention}

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays"></a>

```python
requester_pays: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#requester_pays StorageBucket#requester_pays}

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy"></a>

```python
retention_policy: StorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#retention_policy StorageBucket#retention_policy}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts"></a>

```python
timeouts: StorageBucketTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#timeouts StorageBucket#timeouts}

---

##### `uniform_bucket_level_access`<sup>Optional</sup> <a name="uniform_bucket_level_access" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess"></a>

```python
uniform_bucket_level_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning"></a>

```python
versioning: StorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#versioning StorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website"></a>

```python
website: StorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#website StorageBucket#website}

---

### StorageBucketCors <a name="StorageBucketCors" id="@cdktf/provider-google.storageBucket.StorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketCors(
  max_age_seconds: typing.Union[int, float] = None,
  method: typing.List[str] = None,
  origin: typing.List[str] = None,
  response_header: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.method">method</a></code> | <code>typing.List[str]</code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin">origin</a></code> | <code>typing.List[str]</code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader">response_header</a></code> | <code>typing.List[str]</code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#max_age_seconds StorageBucket#max_age_seconds}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#method StorageBucket#method}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin"></a>

```python
origin: typing.List[str]
```

- *Type:* typing.List[str]

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#origin StorageBucket#origin}

---

##### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader"></a>

```python
response_header: typing.List[str]
```

- *Type:* typing.List[str]

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#response_header StorageBucket#response_header}

---

### StorageBucketCustomPlacementConfig <a name="StorageBucketCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketCustomPlacementConfig(
  data_locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations">data_locations</a></code> | <code>typing.List[str]</code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `data_locations`<sup>Required</sup> <a name="data_locations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations"></a>

```python
data_locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#data_locations StorageBucket#data_locations}

---

### StorageBucketEncryption <a name="StorageBucketEncryption" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketEncryption(
  default_kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName">default_kms_key_name</a></code> | <code>str</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `default_kms_key_name`<sup>Required</sup> <a name="default_kms_key_name" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName"></a>

```python
default_kms_key_name: str
```

- *Type:* str

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#default_kms_key_name StorageBucket#default_kms_key_name}

---

### StorageBucketLifecycleRule <a name="StorageBucketLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLifecycleRule(
  action: StorageBucketLifecycleRuleAction,
  condition: StorageBucketLifecycleRuleCondition
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action"></a>

```python
action: StorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#action StorageBucket#action}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition"></a>

```python
condition: StorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#condition StorageBucket#condition}

---

### StorageBucketLifecycleRuleAction <a name="StorageBucketLifecycleRuleAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLifecycleRuleAction(
  type: str,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type">type</a></code> | <code>str</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass">storage_class</a></code> | <code>str</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#type StorageBucket#type}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

### StorageBucketLifecycleRuleCondition <a name="StorageBucketLifecycleRuleCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLifecycleRuleCondition(
  age: typing.Union[int, float] = None,
  created_before: str = None,
  custom_time_before: str = None,
  days_since_custom_time: typing.Union[int, float] = None,
  days_since_noncurrent_time: typing.Union[int, float] = None,
  matches_prefix: typing.List[str] = None,
  matches_storage_class: typing.List[str] = None,
  matches_suffix: typing.List[str] = None,
  noncurrent_time_before: str = None,
  num_newer_versions: typing.Union[int, float] = None,
  with_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age">age</a></code> | <code>typing.Union[int, float]</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore">created_before</a></code> | <code>str</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore">custom_time_before</a></code> | <code>str</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">days_since_custom_time</a></code> | <code>typing.Union[int, float]</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">days_since_noncurrent_time</a></code> | <code>typing.Union[int, float]</code> | Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix">matches_prefix</a></code> | <code>typing.List[str]</code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass">matches_storage_class</a></code> | <code>typing.List[str]</code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix">matches_suffix</a></code> | <code>typing.List[str]</code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">noncurrent_time_before</a></code> | <code>str</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions">num_newer_versions</a></code> | <code>typing.Union[int, float]</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState">with_state</a></code> | <code>str</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `age`<sup>Optional</sup> <a name="age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age"></a>

```python
age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#age StorageBucket#age}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#created_before StorageBucket#created_before}

---

##### `custom_time_before`<sup>Optional</sup> <a name="custom_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```python
custom_time_before: str
```

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#custom_time_before StorageBucket#custom_time_before}

---

##### `days_since_custom_time`<sup>Optional</sup> <a name="days_since_custom_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```python
days_since_custom_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#days_since_custom_time StorageBucket#days_since_custom_time}

---

##### `days_since_noncurrent_time`<sup>Optional</sup> <a name="days_since_noncurrent_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```python
days_since_noncurrent_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}

---

##### `matches_prefix`<sup>Optional</sup> <a name="matches_prefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```python
matches_prefix: typing.List[str]
```

- *Type:* typing.List[str]

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#matches_prefix StorageBucket#matches_prefix}

---

##### `matches_storage_class`<sup>Optional</sup> <a name="matches_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```python
matches_storage_class: typing.List[str]
```

- *Type:* typing.List[str]

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#matches_storage_class StorageBucket#matches_storage_class}

---

##### `matches_suffix`<sup>Optional</sup> <a name="matches_suffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```python
matches_suffix: typing.List[str]
```

- *Type:* typing.List[str]

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#matches_suffix StorageBucket#matches_suffix}

---

##### `noncurrent_time_before`<sup>Optional</sup> <a name="noncurrent_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```python
noncurrent_time_before: str
```

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#noncurrent_time_before StorageBucket#noncurrent_time_before}

---

##### `num_newer_versions`<sup>Optional</sup> <a name="num_newer_versions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```python
num_newer_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#num_newer_versions StorageBucket#num_newer_versions}

---

##### `with_state`<sup>Optional</sup> <a name="with_state" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState"></a>

```python
with_state: str
```

- *Type:* str

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#with_state StorageBucket#with_state}

---

### StorageBucketLogging <a name="StorageBucketLogging" id="@cdktf/provider-google.storageBucket.StorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLogging(
  log_bucket: str,
  log_object_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket">log_bucket</a></code> | <code>str</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix">log_object_prefix</a></code> | <code>str</code> | The object prefix for log objects. |

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#log_bucket StorageBucket#log_bucket}

---

##### `log_object_prefix`<sup>Optional</sup> <a name="log_object_prefix" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix"></a>

```python
log_object_prefix: str
```

- *Type:* str

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#log_object_prefix StorageBucket#log_object_prefix}

---

### StorageBucketRetentionPolicy <a name="StorageBucketRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketRetentionPolicy(
  retention_period: typing.Union[int, float],
  is_locked: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked">is_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#retention_period StorageBucket#retention_period}

---

##### `is_locked`<sup>Optional</sup> <a name="is_locked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked"></a>

```python
is_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#is_locked StorageBucket#is_locked}

---

### StorageBucketTimeouts <a name="StorageBucketTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#create StorageBucket#create}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#read StorageBucket#read}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#update StorageBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#create StorageBucket#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#read StorageBucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#update StorageBucket#update}.

---

### StorageBucketVersioning <a name="StorageBucketVersioning" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketVersioning(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketWebsite <a name="StorageBucketWebsite" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketWebsite(
  main_page_suffix: str = None,
  not_found_page: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix">main_page_suffix</a></code> | <code>str</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage">not_found_page</a></code> | <code>str</code> | The custom object to return when a requested resource is not found. |

---

##### `main_page_suffix`<sup>Optional</sup> <a name="main_page_suffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix"></a>

```python
main_page_suffix: str
```

- *Type:* str

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#main_page_suffix StorageBucket#main_page_suffix}

---

##### `not_found_page`<sup>Optional</sup> <a name="not_found_page" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage"></a>

```python
not_found_page: str
```

- *Type:* str

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#not_found_page StorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketAutoclassOutputReference <a name="StorageBucketAutoclassOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketAutoclassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass">reset_terminal_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_terminal_storage_class` <a name="reset_terminal_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```python
def reset_terminal_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput">terminal_storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass">terminal_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal_storage_class_input`<sup>Optional</sup> <a name="terminal_storage_class_input" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```python
terminal_storage_class_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal_storage_class`<sup>Required</sup> <a name="terminal_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```python
terminal_storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---


### StorageBucketCorsList <a name="StorageBucketCorsList" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageBucketCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageBucketCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]]

---


### StorageBucketCorsOutputReference <a name="StorageBucketCorsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader">reset_response_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_response_header` <a name="reset_response_header" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader"></a>

```python
def reset_response_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput">method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput">origin_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput">response_header_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method">method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin">origin</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader">response_header</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput"></a>

```python
method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput"></a>

```python
origin_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_header_input`<sup>Optional</sup> <a name="response_header_input" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```python
response_header_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin"></a>

```python
origin: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_header`<sup>Required</sup> <a name="response_header" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader"></a>

```python
response_header: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageBucketCors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>]

---


### StorageBucketCustomPlacementConfigOutputReference <a name="StorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketCustomPlacementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">data_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations">data_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_locations_input`<sup>Optional</sup> <a name="data_locations_input" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```python
data_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_locations`<sup>Required</sup> <a name="data_locations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```python
data_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---


### StorageBucketEncryptionOutputReference <a name="StorageBucketEncryptionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">default_kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName">default_kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_kms_key_name_input`<sup>Optional</sup> <a name="default_kms_key_name_input" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```python
default_kms_key_name_input: str
```

- *Type:* str

---

##### `default_kms_key_name`<sup>Required</sup> <a name="default_kms_key_name" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```python
default_kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---


### StorageBucketLifecycleRuleActionOutputReference <a name="StorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLifecycleRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---


### StorageBucketLifecycleRuleConditionOutputReference <a name="StorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLifecycleRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge">reset_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">reset_created_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">reset_custom_time_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">reset_days_since_custom_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">reset_days_since_noncurrent_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">reset_matches_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">reset_matches_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">reset_matches_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">reset_noncurrent_time_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">reset_num_newer_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState">reset_with_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_age` <a name="reset_age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```python
def reset_age() -> None
```

##### `reset_created_before` <a name="reset_created_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```python
def reset_created_before() -> None
```

##### `reset_custom_time_before` <a name="reset_custom_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```python
def reset_custom_time_before() -> None
```

##### `reset_days_since_custom_time` <a name="reset_days_since_custom_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```python
def reset_days_since_custom_time() -> None
```

##### `reset_days_since_noncurrent_time` <a name="reset_days_since_noncurrent_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```python
def reset_days_since_noncurrent_time() -> None
```

##### `reset_matches_prefix` <a name="reset_matches_prefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```python
def reset_matches_prefix() -> None
```

##### `reset_matches_storage_class` <a name="reset_matches_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```python
def reset_matches_storage_class() -> None
```

##### `reset_matches_suffix` <a name="reset_matches_suffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```python
def reset_matches_suffix() -> None
```

##### `reset_noncurrent_time_before` <a name="reset_noncurrent_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```python
def reset_noncurrent_time_before() -> None
```

##### `reset_num_newer_versions` <a name="reset_num_newer_versions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```python
def reset_num_newer_versions() -> None
```

##### `reset_with_state` <a name="reset_with_state" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```python
def reset_with_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput">age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">created_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">custom_time_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">days_since_custom_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">days_since_noncurrent_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">matches_prefix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">matches_storage_class_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">matches_suffix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">noncurrent_time_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">num_newer_versions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">with_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age">age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">created_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">custom_time_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">days_since_custom_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">days_since_noncurrent_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">matches_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">matches_storage_class</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">matches_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">noncurrent_time_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">num_newer_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState">with_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `age_input`<sup>Optional</sup> <a name="age_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```python
age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_before_input`<sup>Optional</sup> <a name="created_before_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```python
created_before_input: str
```

- *Type:* str

---

##### `custom_time_before_input`<sup>Optional</sup> <a name="custom_time_before_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```python
custom_time_before_input: str
```

- *Type:* str

---

##### `days_since_custom_time_input`<sup>Optional</sup> <a name="days_since_custom_time_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```python
days_since_custom_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_since_noncurrent_time_input`<sup>Optional</sup> <a name="days_since_noncurrent_time_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```python
days_since_noncurrent_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matches_prefix_input`<sup>Optional</sup> <a name="matches_prefix_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```python
matches_prefix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_storage_class_input`<sup>Optional</sup> <a name="matches_storage_class_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```python
matches_storage_class_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_suffix_input`<sup>Optional</sup> <a name="matches_suffix_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```python
matches_suffix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `noncurrent_time_before_input`<sup>Optional</sup> <a name="noncurrent_time_before_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```python
noncurrent_time_before_input: str
```

- *Type:* str

---

##### `num_newer_versions_input`<sup>Optional</sup> <a name="num_newer_versions_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```python
num_newer_versions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_state_input`<sup>Optional</sup> <a name="with_state_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```python
with_state_input: str
```

- *Type:* str

---

##### `age`<sup>Required</sup> <a name="age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```python
age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_before`<sup>Required</sup> <a name="created_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

---

##### `custom_time_before`<sup>Required</sup> <a name="custom_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```python
custom_time_before: str
```

- *Type:* str

---

##### `days_since_custom_time`<sup>Required</sup> <a name="days_since_custom_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```python
days_since_custom_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_since_noncurrent_time`<sup>Required</sup> <a name="days_since_noncurrent_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```python
days_since_noncurrent_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matches_prefix`<sup>Required</sup> <a name="matches_prefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```python
matches_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_storage_class`<sup>Required</sup> <a name="matches_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```python
matches_storage_class: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_suffix`<sup>Required</sup> <a name="matches_suffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```python
matches_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `noncurrent_time_before`<sup>Required</sup> <a name="noncurrent_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```python
noncurrent_time_before: str
```

- *Type:* str

---

##### `num_newer_versions`<sup>Required</sup> <a name="num_newer_versions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```python
num_newer_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_state`<sup>Required</sup> <a name="with_state" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```python
with_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


### StorageBucketLifecycleRuleList <a name="StorageBucketLifecycleRuleList" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]]

---


### StorageBucketLifecycleRuleOutputReference <a name="StorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition">put_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction"></a>

```python
def put_action(
  type: str,
  storage_class: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction.parameter.type"></a>

- *Type:* str

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#type StorageBucket#type}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction.parameter.storageClass"></a>

- *Type:* str

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition"></a>

```python
def put_condition(
  age: typing.Union[int, float] = None,
  created_before: str = None,
  custom_time_before: str = None,
  days_since_custom_time: typing.Union[int, float] = None,
  days_since_noncurrent_time: typing.Union[int, float] = None,
  matches_prefix: typing.List[str] = None,
  matches_storage_class: typing.List[str] = None,
  matches_suffix: typing.List[str] = None,
  noncurrent_time_before: str = None,
  num_newer_versions: typing.Union[int, float] = None,
  with_state: str = None
) -> None
```

###### `age`<sup>Optional</sup> <a name="age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.age"></a>

- *Type:* typing.Union[int, float]

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#age StorageBucket#age}

---

###### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.createdBefore"></a>

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#created_before StorageBucket#created_before}

---

###### `custom_time_before`<sup>Optional</sup> <a name="custom_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.customTimeBefore"></a>

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#custom_time_before StorageBucket#custom_time_before}

---

###### `days_since_custom_time`<sup>Optional</sup> <a name="days_since_custom_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.daysSinceCustomTime"></a>

- *Type:* typing.Union[int, float]

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#days_since_custom_time StorageBucket#days_since_custom_time}

---

###### `days_since_noncurrent_time`<sup>Optional</sup> <a name="days_since_noncurrent_time" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.daysSinceNoncurrentTime"></a>

- *Type:* typing.Union[int, float]

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}

---

###### `matches_prefix`<sup>Optional</sup> <a name="matches_prefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.matchesPrefix"></a>

- *Type:* typing.List[str]

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#matches_prefix StorageBucket#matches_prefix}

---

###### `matches_storage_class`<sup>Optional</sup> <a name="matches_storage_class" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.matchesStorageClass"></a>

- *Type:* typing.List[str]

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#matches_storage_class StorageBucket#matches_storage_class}

---

###### `matches_suffix`<sup>Optional</sup> <a name="matches_suffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.matchesSuffix"></a>

- *Type:* typing.List[str]

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#matches_suffix StorageBucket#matches_suffix}

---

###### `noncurrent_time_before`<sup>Optional</sup> <a name="noncurrent_time_before" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.noncurrentTimeBefore"></a>

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#noncurrent_time_before StorageBucket#noncurrent_time_before}

---

###### `num_newer_versions`<sup>Optional</sup> <a name="num_newer_versions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.numNewerVersions"></a>

- *Type:* typing.Union[int, float]

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#num_newer_versions StorageBucket#num_newer_versions}

---

###### `with_state`<sup>Optional</sup> <a name="with_state" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.withState"></a>

- *Type:* str

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/storage_bucket#with_state StorageBucket#with_state}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action"></a>

```python
action: StorageBucketLifecycleRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition"></a>

```python
condition: StorageBucketLifecycleRuleConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```python
action_input: StorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```python
condition_input: StorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageBucketLifecycleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>]

---


### StorageBucketLoggingOutputReference <a name="StorageBucketLoggingOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix">reset_log_object_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_object_prefix` <a name="reset_log_object_prefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```python
def reset_log_object_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput">log_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput">log_object_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket">log_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix">log_object_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_bucket_input`<sup>Optional</sup> <a name="log_bucket_input" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput"></a>

```python
log_bucket_input: str
```

- *Type:* str

---

##### `log_object_prefix_input`<sup>Optional</sup> <a name="log_object_prefix_input" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```python
log_object_prefix_input: str
```

- *Type:* str

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

---

##### `log_object_prefix`<sup>Required</sup> <a name="log_object_prefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```python
log_object_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---


### StorageBucketRetentionPolicyOutputReference <a name="StorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked">reset_is_locked</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_locked` <a name="reset_is_locked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```python
def reset_is_locked() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput">is_locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked">is_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_locked_input`<sup>Optional</sup> <a name="is_locked_input" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```python
is_locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_locked`<sup>Required</sup> <a name="is_locked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```python
is_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---


### StorageBucketTimeoutsOutputReference <a name="StorageBucketTimeoutsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>]

---


### StorageBucketVersioningOutputReference <a name="StorageBucketVersioningOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketVersioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---


### StorageBucketWebsiteOutputReference <a name="StorageBucketWebsiteOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket

storageBucket.StorageBucketWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix">reset_main_page_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage">reset_not_found_page</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_main_page_suffix` <a name="reset_main_page_suffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```python
def reset_main_page_suffix() -> None
```

##### `reset_not_found_page` <a name="reset_not_found_page" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```python
def reset_not_found_page() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput">main_page_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput">not_found_page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix">main_page_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage">not_found_page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `main_page_suffix_input`<sup>Optional</sup> <a name="main_page_suffix_input" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```python
main_page_suffix_input: str
```

- *Type:* str

---

##### `not_found_page_input`<sup>Optional</sup> <a name="not_found_page_input" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```python
not_found_page_input: str
```

- *Type:* str

---

##### `main_page_suffix`<sup>Required</sup> <a name="main_page_suffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```python
main_page_suffix: str
```

- *Type:* str

---

##### `not_found_page`<sup>Required</sup> <a name="not_found_page" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```python
not_found_page: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---



