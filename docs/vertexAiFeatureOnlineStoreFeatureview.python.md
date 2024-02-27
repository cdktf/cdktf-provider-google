# `vertexAiFeatureOnlineStoreFeatureview` Submodule <a name="`vertexAiFeatureOnlineStoreFeatureview` Submodule" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureOnlineStoreFeatureview <a name="VertexAiFeatureOnlineStoreFeatureview" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_online_store: str,
  region: str,
  big_query_source: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource = None,
  feature_registry_source: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  project: str = None,
  sync_config: VertexAiFeatureOnlineStoreFeatureviewSyncConfig = None,
  timeouts: VertexAiFeatureOnlineStoreFeatureviewTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | The name of the FeatureOnlineStore to use for the featureview. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.region">region</a></code> | <code>str</code> | The region for the resource. It should be the same as the featureonlinestore region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.bigQuerySource">big_query_source</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.featureRegistrySource">feature_registry_source</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | feature_registry_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | sync_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.featureOnlineStore"></a>

- *Type:* str

The name of the FeatureOnlineStore to use for the featureview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_online_store VertexAiFeatureOnlineStoreFeatureview#feature_online_store}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.region"></a>

- *Type:* str

The region for the resource. It should be the same as the featureonlinestore region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#region VertexAiFeatureOnlineStoreFeatureview#region}

---

##### `big_query_source`<sup>Optional</sup> <a name="big_query_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.bigQuerySource"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#big_query_source VertexAiFeatureOnlineStoreFeatureview#big_query_source}

---

##### `feature_registry_source`<sup>Optional</sup> <a name="feature_registry_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.featureRegistrySource"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

feature_registry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_registry_source VertexAiFeatureOnlineStoreFeatureview#feature_registry_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this FeatureView.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#labels VertexAiFeatureOnlineStoreFeatureview#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.name"></a>

- *Type:* str

Name of the FeatureView.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#name VertexAiFeatureOnlineStoreFeatureview#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}.

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.syncConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#sync_config VertexAiFeatureOnlineStoreFeatureview#sync_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#timeouts VertexAiFeatureOnlineStoreFeatureview#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource">put_big_query_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource">put_feature_registry_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig">put_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource">reset_big_query_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource">reset_feature_registry_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetSyncConfig">reset_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_big_query_source` <a name="put_big_query_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource"></a>

```python
def put_big_query_source(
  entity_id_columns: typing.List[str],
  uri: str
) -> None
```

###### `entity_id_columns`<sup>Required</sup> <a name="entity_id_columns" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource.parameter.entityIdColumns"></a>

- *Type:* typing.List[str]

Columns to construct entityId / row keys. Start by supporting 1 only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#entity_id_columns VertexAiFeatureOnlineStoreFeatureview#entity_id_columns}

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource.parameter.uri"></a>

- *Type:* str

The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#uri VertexAiFeatureOnlineStoreFeatureview#uri}

---

##### `put_feature_registry_source` <a name="put_feature_registry_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource"></a>

```python
def put_feature_registry_source(
  feature_groups: typing.Union[IResolvable, typing.List[VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups]]
) -> None
```

###### `feature_groups`<sup>Required</sup> <a name="feature_groups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource.parameter.featureGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]

feature_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_groups VertexAiFeatureOnlineStoreFeatureview#feature_groups}

---

##### `put_sync_config` <a name="put_sync_config" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig"></a>

```python
def put_sync_config(
  cron: str = None
) -> None
```

###### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig.parameter.cron"></a>

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#cron VertexAiFeatureOnlineStoreFeatureview#cron}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}.

---

##### `reset_big_query_source` <a name="reset_big_query_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource"></a>

```python
def reset_big_query_source() -> None
```

##### `reset_feature_registry_source` <a name="reset_feature_registry_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource"></a>

```python
def reset_feature_registry_source() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_sync_config` <a name="reset_sync_config" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetSyncConfig"></a>

```python
def reset_sync_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiFeatureOnlineStoreFeatureview to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiFeatureOnlineStoreFeatureview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureOnlineStoreFeatureview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource">big_query_source</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource">feature_registry_source</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput">big_query_source_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput">feature_online_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput">feature_registry_source_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput">sync_config_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `big_query_source`<sup>Required</sup> <a name="big_query_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource"></a>

```python
big_query_source: VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `feature_registry_source`<sup>Required</sup> <a name="feature_registry_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource"></a>

```python
feature_registry_source: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a>

---

##### `sync_config`<sup>Required</sup> <a name="sync_config" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfig"></a>

```python
sync_config: VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeouts"></a>

```python
timeouts: VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `big_query_source_input`<sup>Optional</sup> <a name="big_query_source_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput"></a>

```python
big_query_source_input: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `feature_online_store_input`<sup>Optional</sup> <a name="feature_online_store_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput"></a>

```python
feature_online_store_input: str
```

- *Type:* str

---

##### `feature_registry_source_input`<sup>Optional</sup> <a name="feature_registry_source_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput"></a>

```python
feature_registry_source_input: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sync_config_input`<sup>Optional</sup> <a name="sync_config_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput"></a>

```python
sync_config_input: VertexAiFeatureOnlineStoreFeatureviewSyncConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VertexAiFeatureOnlineStoreFeatureviewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureOnlineStoreFeatureviewBigQuerySource <a name="VertexAiFeatureOnlineStoreFeatureviewBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource(
  entity_id_columns: typing.List[str],
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns">entity_id_columns</a></code> | <code>typing.List[str]</code> | Columns to construct entityId / row keys. Start by supporting 1 only. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri">uri</a></code> | <code>str</code> | The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig. |

---

##### `entity_id_columns`<sup>Required</sup> <a name="entity_id_columns" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns"></a>

```python
entity_id_columns: typing.List[str]
```

- *Type:* typing.List[str]

Columns to construct entityId / row keys. Start by supporting 1 only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#entity_id_columns VertexAiFeatureOnlineStoreFeatureview#entity_id_columns}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri"></a>

```python
uri: str
```

- *Type:* str

The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#uri VertexAiFeatureOnlineStoreFeatureview#uri}

---

### VertexAiFeatureOnlineStoreFeatureviewConfig <a name="VertexAiFeatureOnlineStoreFeatureviewConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_online_store: str,
  region: str,
  big_query_source: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource = None,
  feature_registry_source: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  project: str = None,
  sync_config: VertexAiFeatureOnlineStoreFeatureviewSyncConfig = None,
  timeouts: VertexAiFeatureOnlineStoreFeatureviewTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | The name of the FeatureOnlineStore to use for the featureview. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.region">region</a></code> | <code>str</code> | The region for the resource. It should be the same as the featureonlinestore region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource">big_query_source</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource">feature_registry_source</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | feature_registry_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.name">name</a></code> | <code>str</code> | Name of the FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | sync_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

The name of the FeatureOnlineStore to use for the featureview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_online_store VertexAiFeatureOnlineStoreFeatureview#feature_online_store}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region for the resource. It should be the same as the featureonlinestore region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#region VertexAiFeatureOnlineStoreFeatureview#region}

---

##### `big_query_source`<sup>Optional</sup> <a name="big_query_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource"></a>

```python
big_query_source: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#big_query_source VertexAiFeatureOnlineStoreFeatureview#big_query_source}

---

##### `feature_registry_source`<sup>Optional</sup> <a name="feature_registry_source" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource"></a>

```python
feature_registry_source: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

feature_registry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_registry_source VertexAiFeatureOnlineStoreFeatureview#feature_registry_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this FeatureView.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#labels VertexAiFeatureOnlineStoreFeatureview#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the FeatureView.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#name VertexAiFeatureOnlineStoreFeatureview#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}.

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig"></a>

```python
sync_config: VertexAiFeatureOnlineStoreFeatureviewSyncConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#sync_config VertexAiFeatureOnlineStoreFeatureview#sync_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts"></a>

```python
timeouts: VertexAiFeatureOnlineStoreFeatureviewTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#timeouts VertexAiFeatureOnlineStoreFeatureview#timeouts}

---

### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource(
  feature_groups: typing.Union[IResolvable, typing.List[VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups">feature_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]</code> | feature_groups block. |

---

##### `feature_groups`<sup>Required</sup> <a name="feature_groups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups"></a>

```python
feature_groups: typing.Union[IResolvable, typing.List[VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]

feature_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_groups VertexAiFeatureOnlineStoreFeatureview#feature_groups}

---

### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups(
  feature_group_id: str,
  feature_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId">feature_group_id</a></code> | <code>str</code> | Identifier of the feature group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds">feature_ids</a></code> | <code>typing.List[str]</code> | Identifiers of features under the feature group. |

---

##### `feature_group_id`<sup>Required</sup> <a name="feature_group_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId"></a>

```python
feature_group_id: str
```

- *Type:* str

Identifier of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_group_id VertexAiFeatureOnlineStoreFeatureview#feature_group_id}

---

##### `feature_ids`<sup>Required</sup> <a name="feature_ids" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds"></a>

```python
feature_ids: typing.List[str]
```

- *Type:* typing.List[str]

Identifiers of features under the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_ids VertexAiFeatureOnlineStoreFeatureview#feature_ids}

---

### VertexAiFeatureOnlineStoreFeatureviewSyncConfig <a name="VertexAiFeatureOnlineStoreFeatureviewSyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig(
  cron: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron">cron</a></code> | <code>str</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". |

---

##### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron"></a>

```python
cron: str
```

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#cron VertexAiFeatureOnlineStoreFeatureview#cron}

---

### VertexAiFeatureOnlineStoreFeatureviewTimeouts <a name="VertexAiFeatureOnlineStoreFeatureviewTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput">entity_id_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns">entity_id_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_columns_input`<sup>Optional</sup> <a name="entity_id_columns_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput"></a>

```python
entity_id_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `entity_id_columns`<sup>Required</sup> <a name="entity_id_columns" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns"></a>

```python
entity_id_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput">feature_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput">feature_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId">feature_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds">feature_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_group_id_input`<sup>Optional</sup> <a name="feature_group_id_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput"></a>

```python
feature_group_id_input: str
```

- *Type:* str

---

##### `feature_ids_input`<sup>Optional</sup> <a name="feature_ids_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput"></a>

```python
feature_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feature_group_id`<sup>Required</sup> <a name="feature_group_id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId"></a>

```python
feature_group_id: str
```

- *Type:* str

---

##### `feature_ids`<sup>Required</sup> <a name="feature_ids" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds"></a>

```python
feature_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups">put_feature_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_feature_groups` <a name="put_feature_groups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups"></a>

```python
def put_feature_groups(
  value: typing.Union[IResolvable, typing.List[VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups">feature_groups</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput">feature_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_groups`<sup>Required</sup> <a name="feature_groups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups"></a>

```python
feature_groups: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a>

---

##### `feature_groups_input`<sup>Optional</sup> <a name="feature_groups_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput"></a>

```python
feature_groups_input: typing.Union[IResolvable, typing.List[VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---


### VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron">reset_cron</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cron` <a name="reset_cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron"></a>

```python
def reset_cron() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput">cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron">cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput"></a>

```python
cron_input: str
```

- *Type:* str

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron"></a>

```python
cron: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeatureOnlineStoreFeatureviewSyncConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---


### VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_online_store_featureview

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VertexAiFeatureOnlineStoreFeatureviewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>]

---



