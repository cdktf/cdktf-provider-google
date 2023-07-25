# `google_app_engine_service_split_traffic`

Refer to the Terraform Registory for docs: [`google_app_engine_service_split_traffic`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic).

# `appEngineServiceSplitTraffic` Submodule <a name="`appEngineServiceSplitTraffic` Submodule" id="@cdktf/provider-google.appEngineServiceSplitTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceSplitTraffic <a name="AppEngineServiceSplitTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic google_app_engine_service_split_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  split: AppEngineServiceSplitTrafficSplit,
  id: str = None,
  migrate_traffic: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: AppEngineServiceSplitTrafficTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.split">split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.migrateTraffic">migrate_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.service"></a>

- *Type:* str

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.split"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrate_traffic`<sup>Optional</sup> <a name="migrate_traffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.migrateTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit">put_split</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic">reset_migrate_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_split` <a name="put_split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit"></a>

```python
def put_split(
  allocations: typing.Mapping[str],
  shard_by: str = None
) -> None
```

###### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit.parameter.allocations"></a>

- *Type:* typing.Mapping[str]

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#allocations AppEngineServiceSplitTraffic#allocations}

---

###### `shard_by`<sup>Optional</sup> <a name="shard_by" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit.parameter.shardBy"></a>

- *Type:* str

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#shard_by AppEngineServiceSplitTraffic#shard_by}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_migrate_traffic` <a name="reset_migrate_traffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic"></a>

```python
def reset_migrate_traffic() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split">split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput">migrate_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput">split_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic">migrate_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split"></a>

```python
split: AppEngineServiceSplitTrafficSplitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts"></a>

```python
timeouts: AppEngineServiceSplitTrafficTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migrate_traffic_input`<sup>Optional</sup> <a name="migrate_traffic_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput"></a>

```python
migrate_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `split_input`<sup>Optional</sup> <a name="split_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput"></a>

```python
split_input: AppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppEngineServiceSplitTrafficTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migrate_traffic`<sup>Required</sup> <a name="migrate_traffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic"></a>

```python
migrate_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceSplitTrafficConfig <a name="AppEngineServiceSplitTrafficConfig" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  split: AppEngineServiceSplitTrafficSplit,
  id: str = None,
  migrate_traffic: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: AppEngineServiceSplitTrafficTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service">service</a></code> | <code>str</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split">split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic">migrate_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split"></a>

```python
split: AppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrate_traffic`<sup>Optional</sup> <a name="migrate_traffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic"></a>

```python
migrate_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts"></a>

```python
timeouts: AppEngineServiceSplitTrafficTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}

---

### AppEngineServiceSplitTrafficSplit <a name="AppEngineServiceSplitTrafficSplit" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit(
  allocations: typing.Mapping[str],
  shard_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations">allocations</a></code> | <code>typing.Mapping[str]</code> | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy">shard_by</a></code> | <code>str</code> | Mechanism used to determine which version a request is sent to. |

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations"></a>

```python
allocations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#allocations AppEngineServiceSplitTraffic#allocations}

---

##### `shard_by`<sup>Optional</sup> <a name="shard_by" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy"></a>

```python
shard_by: str
```

- *Type:* str

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#shard_by AppEngineServiceSplitTraffic#shard_by}

---

### AppEngineServiceSplitTrafficTimeouts <a name="AppEngineServiceSplitTrafficTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceSplitTrafficSplitOutputReference <a name="AppEngineServiceSplitTrafficSplitOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy">reset_shard_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_shard_by` <a name="reset_shard_by" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy"></a>

```python
def reset_shard_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput">allocations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput">shard_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations">allocations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy">shard_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocations_input`<sup>Optional</sup> <a name="allocations_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput"></a>

```python
allocations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shard_by_input`<sup>Optional</sup> <a name="shard_by_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput"></a>

```python
shard_by_input: str
```

- *Type:* str

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations"></a>

```python
allocations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shard_by`<sup>Required</sup> <a name="shard_by" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy"></a>

```python
shard_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineServiceSplitTrafficSplit
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---


### AppEngineServiceSplitTrafficTimeoutsOutputReference <a name="AppEngineServiceSplitTrafficTimeoutsOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_split_traffic

appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppEngineServiceSplitTrafficTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>]

---



