# `cloudAssetOrganizationFeed` Submodule <a name="`cloudAssetOrganizationFeed` Submodule" id="@cdktf/provider-google.cloudAssetOrganizationFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAssetOrganizationFeed <a name="CloudAssetOrganizationFeed" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed google_cloud_asset_organization_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeed(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_project: str,
  feed_id: str,
  feed_output_config: CloudAssetOrganizationFeedFeedOutputConfig,
  org_id: str,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  condition: CloudAssetOrganizationFeedCondition = None,
  content_type: str = None,
  id: str = None,
  timeouts: CloudAssetOrganizationFeedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.billingProject"></a>

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#billing_project CloudAssetOrganizationFeed#billing_project}

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.feedId"></a>

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#feed_id CloudAssetOrganizationFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.feedOutputConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#feed_output_config CloudAssetOrganizationFeed#feed_output_config}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.orgId"></a>

- *Type:* str

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#org_id CloudAssetOrganizationFeed#org_id}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.assetNames"></a>

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#asset_names CloudAssetOrganizationFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.assetTypes"></a>

- *Type:* typing.List[str]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#asset_types CloudAssetOrganizationFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#condition CloudAssetOrganizationFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.contentType"></a>

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#content_type CloudAssetOrganizationFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#timeouts CloudAssetOrganizationFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig">put_feed_output_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetNames">reset_asset_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetTypes">reset_asset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition"></a>

```python
def put_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#expression CloudAssetOrganizationFeed#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#description CloudAssetOrganizationFeed#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#location CloudAssetOrganizationFeed#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#title CloudAssetOrganizationFeed#title}

---

##### `put_feed_output_config` <a name="put_feed_output_config" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig"></a>

```python
def put_feed_output_config(
  pubsub_destination: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
) -> None
```

###### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig.parameter.pubsubDestination"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#pubsub_destination CloudAssetOrganizationFeed#pubsub_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}.

---

##### `reset_asset_names` <a name="reset_asset_names" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetNames"></a>

```python
def reset_asset_names() -> None
```

##### `reset_asset_types` <a name="reset_asset_types" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetTypes"></a>

```python
def reset_asset_types() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudAssetOrganizationFeed to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudAssetOrganizationFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudAssetOrganizationFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference">CloudAssetOrganizationFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference">CloudAssetOrganizationFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference">CloudAssetOrganizationFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNamesInput">asset_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypesInput">asset_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProjectInput">billing_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedIdInput">feed_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfigInput">feed_output_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProject">billing_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedId">feed_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.condition"></a>

```python
condition: CloudAssetOrganizationFeedConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference">CloudAssetOrganizationFeedConditionOutputReference</a>

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfig"></a>

```python
feed_output_config: CloudAssetOrganizationFeedFeedOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference">CloudAssetOrganizationFeedFeedOutputConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeouts"></a>

```python
timeouts: CloudAssetOrganizationFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference">CloudAssetOrganizationFeedTimeoutsOutputReference</a>

---

##### `asset_names_input`<sup>Optional</sup> <a name="asset_names_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNamesInput"></a>

```python
asset_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types_input`<sup>Optional</sup> <a name="asset_types_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypesInput"></a>

```python
asset_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project_input`<sup>Optional</sup> <a name="billing_project_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProjectInput"></a>

```python
billing_project_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.conditionInput"></a>

```python
condition_input: CloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `feed_id_input`<sup>Optional</sup> <a name="feed_id_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedIdInput"></a>

```python
feed_id_input: str
```

- *Type:* str

---

##### `feed_output_config_input`<sup>Optional</sup> <a name="feed_output_config_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfigInput"></a>

```python
feed_output_config_input: CloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudAssetOrganizationFeedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>]

---

##### `asset_names`<sup>Required</sup> <a name="asset_names" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_types`<sup>Required</sup> <a name="asset_types" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAssetOrganizationFeedCondition <a name="CloudAssetOrganizationFeedCondition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#expression CloudAssetOrganizationFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#description CloudAssetOrganizationFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#location CloudAssetOrganizationFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#title CloudAssetOrganizationFeed#title}

---

### CloudAssetOrganizationFeedConfig <a name="CloudAssetOrganizationFeedConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_project: str,
  feed_id: str,
  feed_output_config: CloudAssetOrganizationFeedFeedOutputConfig,
  org_id: str,
  asset_names: typing.List[str] = None,
  asset_types: typing.List[str] = None,
  condition: CloudAssetOrganizationFeedCondition = None,
  content_type: str = None,
  id: str = None,
  timeouts: CloudAssetOrganizationFeedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.billingProject">billing_project</a></code> | <code>str</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedId">feed_id</a></code> | <code>str</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedOutputConfig">feed_output_config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.orgId">org_id</a></code> | <code>str</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetNames">asset_names</a></code> | <code>typing.List[str]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.contentType">content_type</a></code> | <code>str</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_project`<sup>Required</sup> <a name="billing_project" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#billing_project CloudAssetOrganizationFeed#billing_project}

---

##### `feed_id`<sup>Required</sup> <a name="feed_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedId"></a>

```python
feed_id: str
```

- *Type:* str

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#feed_id CloudAssetOrganizationFeed#feed_id}

---

##### `feed_output_config`<sup>Required</sup> <a name="feed_output_config" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedOutputConfig"></a>

```python
feed_output_config: CloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#feed_output_config CloudAssetOrganizationFeed#feed_output_config}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#org_id CloudAssetOrganizationFeed#org_id}

---

##### `asset_names`<sup>Optional</sup> <a name="asset_names" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetNames"></a>

```python
asset_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#asset_names CloudAssetOrganizationFeed#asset_names}

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#asset_types CloudAssetOrganizationFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.condition"></a>

```python
condition: CloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#condition CloudAssetOrganizationFeed#condition}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#content_type CloudAssetOrganizationFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.timeouts"></a>

```python
timeouts: CloudAssetOrganizationFeedTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#timeouts CloudAssetOrganizationFeed#timeouts}

---

### CloudAssetOrganizationFeedFeedOutputConfig <a name="CloudAssetOrganizationFeedFeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig(
  pubsub_destination: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination"></a>

```python
pubsub_destination: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#pubsub_destination CloudAssetOrganizationFeed#pubsub_destination}

---

### CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination <a name="CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination(
  topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>str</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```python
topic: str
```

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#topic CloudAssetOrganizationFeed#topic}

---

### CloudAssetOrganizationFeedTimeouts <a name="CloudAssetOrganizationFeedTimeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAssetOrganizationFeedConditionOutputReference <a name="CloudAssetOrganizationFeedConditionOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.internalValue"></a>

```python
internal_value: CloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---


### CloudAssetOrganizationFeedFeedOutputConfigOutputReference <a name="CloudAssetOrganizationFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination">put_pubsub_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pubsub_destination` <a name="put_pubsub_destination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```python
def put_pubsub_destination(
  topic: str
) -> None
```

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.topic"></a>

- *Type:* str

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_organization_feed#topic CloudAssetOrganizationFeed#topic}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsub_destination_input</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```python
pubsub_destination: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsub_destination_input`<sup>Optional</sup> <a name="pubsub_destination_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```python
pubsub_destination_input: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---


### CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference <a name="CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```python
internal_value: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


### CloudAssetOrganizationFeedTimeoutsOutputReference <a name="CloudAssetOrganizationFeedTimeoutsOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_asset_organization_feed

cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudAssetOrganizationFeedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>]

---



