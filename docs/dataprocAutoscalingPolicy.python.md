# `dataprocAutoscalingPolicy` Submodule <a name="`dataprocAutoscalingPolicy` Submodule" id="@cdktf/provider-google.dataprocAutoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocAutoscalingPolicy <a name="DataprocAutoscalingPolicy" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy google_dataproc_autoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  basic_algorithm: DataprocAutoscalingPolicyBasicAlgorithm = None,
  id: str = None,
  location: str = None,
  project: str = None,
  secondary_worker_config: DataprocAutoscalingPolicySecondaryWorkerConfig = None,
  timeouts: DataprocAutoscalingPolicyTimeouts = None,
  worker_config: DataprocAutoscalingPolicyWorkerConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | The policy id. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.basicAlgorithm">basic_algorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.secondaryWorkerConfig">secondary_worker_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.policyId"></a>

- *Type:* str

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#policy_id DataprocAutoscalingPolicy#policy_id}

---

##### `basic_algorithm`<sup>Optional</sup> <a name="basic_algorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.basicAlgorithm"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#basic_algorithm DataprocAutoscalingPolicy#basic_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.location"></a>

- *Type:* str

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#location DataprocAutoscalingPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}.

---

##### `secondary_worker_config`<sup>Optional</sup> <a name="secondary_worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.secondaryWorkerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#secondary_worker_config DataprocAutoscalingPolicy#secondary_worker_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#timeouts DataprocAutoscalingPolicy#timeouts}

---

##### `worker_config`<sup>Optional</sup> <a name="worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.workerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#worker_config DataprocAutoscalingPolicy#worker_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm">put_basic_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig">put_secondary_worker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig">put_worker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetBasicAlgorithm">reset_basic_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetSecondaryWorkerConfig">reset_secondary_worker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetWorkerConfig">reset_worker_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_basic_algorithm` <a name="put_basic_algorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm"></a>

```python
def put_basic_algorithm(
  yarn_config: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig,
  cooldown_period: str = None
) -> None
```

###### `yarn_config`<sup>Required</sup> <a name="yarn_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm.parameter.yarnConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#yarn_config DataprocAutoscalingPolicy#yarn_config}

---

###### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm.parameter.cooldownPeriod"></a>

- *Type:* str

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#cooldown_period DataprocAutoscalingPolicy#cooldown_period}

---

##### `put_secondary_worker_config` <a name="put_secondary_worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig"></a>

```python
def put_secondary_worker_config(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}.

---

##### `put_worker_config` <a name="put_worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig"></a>

```python
def put_worker_config(
  max_instances: typing.Union[int, float],
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

##### `reset_basic_algorithm` <a name="reset_basic_algorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetBasicAlgorithm"></a>

```python
def reset_basic_algorithm() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_secondary_worker_config` <a name="reset_secondary_worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetSecondaryWorkerConfig"></a>

```python
def reset_secondary_worker_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_worker_config` <a name="reset_worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetWorkerConfig"></a>

```python
def reset_worker_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithm">basic_algorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference">DataprocAutoscalingPolicyBasicAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfig">secondary_worker_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference">DataprocAutoscalingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference">DataprocAutoscalingPolicyWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithmInput">basic_algorithm_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfigInput">secondary_worker_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfigInput">worker_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `basic_algorithm`<sup>Required</sup> <a name="basic_algorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithm"></a>

```python
basic_algorithm: DataprocAutoscalingPolicyBasicAlgorithmOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference">DataprocAutoscalingPolicyBasicAlgorithmOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secondary_worker_config`<sup>Required</sup> <a name="secondary_worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfig"></a>

```python
secondary_worker_config: DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeouts"></a>

```python
timeouts: DataprocAutoscalingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference">DataprocAutoscalingPolicyTimeoutsOutputReference</a>

---

##### `worker_config`<sup>Required</sup> <a name="worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfig"></a>

```python
worker_config: DataprocAutoscalingPolicyWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference">DataprocAutoscalingPolicyWorkerConfigOutputReference</a>

---

##### `basic_algorithm_input`<sup>Optional</sup> <a name="basic_algorithm_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithmInput"></a>

```python
basic_algorithm_input: DataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secondary_worker_config_input`<sup>Optional</sup> <a name="secondary_worker_config_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfigInput"></a>

```python
secondary_worker_config_input: DataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataprocAutoscalingPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>, cdktf.IResolvable]

---

##### `worker_config_input`<sup>Optional</sup> <a name="worker_config_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfigInput"></a>

```python
worker_config_input: DataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocAutoscalingPolicyBasicAlgorithm <a name="DataprocAutoscalingPolicyBasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm(
  yarn_config: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig,
  cooldown_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig">yarn_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | yarn_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | Duration between scaling events. A scaling period starts after the update operation from the previous event has completed. |

---

##### `yarn_config`<sup>Required</sup> <a name="yarn_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig"></a>

```python
yarn_config: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#yarn_config DataprocAutoscalingPolicy#yarn_config}

---

##### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#cooldown_period DataprocAutoscalingPolicy#cooldown_period}

---

### DataprocAutoscalingPolicyBasicAlgorithmYarnConfig <a name="DataprocAutoscalingPolicyBasicAlgorithmYarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig(
  graceful_decommission_timeout: str,
  scale_down_factor: typing.Union[int, float],
  scale_up_factor: typing.Union[int, float],
  scale_down_min_worker_fraction: typing.Union[int, float] = None,
  scale_up_min_worker_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout">graceful_decommission_timeout</a></code> | <code>str</code> | Timeout for YARN graceful decommissioning of Node Managers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor">scale_down_factor</a></code> | <code>typing.Union[int, float]</code> | Fraction of average pending memory in the last cooldown period for which to remove workers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor">scale_up_factor</a></code> | <code>typing.Union[int, float]</code> | Fraction of average pending memory in the last cooldown period for which to add workers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction">scale_down_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction">scale_up_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. |

---

##### `graceful_decommission_timeout`<sup>Required</sup> <a name="graceful_decommission_timeout" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout"></a>

```python
graceful_decommission_timeout: str
```

- *Type:* str

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#graceful_decommission_timeout DataprocAutoscalingPolicy#graceful_decommission_timeout}

---

##### `scale_down_factor`<sup>Required</sup> <a name="scale_down_factor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor"></a>

```python
scale_down_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_factor DataprocAutoscalingPolicy#scale_down_factor}

---

##### `scale_up_factor`<sup>Required</sup> <a name="scale_up_factor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor"></a>

```python
scale_up_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_factor DataprocAutoscalingPolicy#scale_up_factor}

---

##### `scale_down_min_worker_fraction`<sup>Optional</sup> <a name="scale_down_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction"></a>

```python
scale_down_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_min_worker_fraction DataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

##### `scale_up_min_worker_fraction`<sup>Optional</sup> <a name="scale_up_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction"></a>

```python
scale_up_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_min_worker_fraction DataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

### DataprocAutoscalingPolicyConfig <a name="DataprocAutoscalingPolicyConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  basic_algorithm: DataprocAutoscalingPolicyBasicAlgorithm = None,
  id: str = None,
  location: str = None,
  project: str = None,
  secondary_worker_config: DataprocAutoscalingPolicySecondaryWorkerConfig = None,
  timeouts: DataprocAutoscalingPolicyTimeouts = None,
  worker_config: DataprocAutoscalingPolicyWorkerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.policyId">policy_id</a></code> | <code>str</code> | The policy id. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.basicAlgorithm">basic_algorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.location">location</a></code> | <code>str</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig">secondary_worker_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#policy_id DataprocAutoscalingPolicy#policy_id}

---

##### `basic_algorithm`<sup>Optional</sup> <a name="basic_algorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.basicAlgorithm"></a>

```python
basic_algorithm: DataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#basic_algorithm DataprocAutoscalingPolicy#basic_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#location DataprocAutoscalingPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}.

---

##### `secondary_worker_config`<sup>Optional</sup> <a name="secondary_worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig"></a>

```python
secondary_worker_config: DataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#secondary_worker_config DataprocAutoscalingPolicy#secondary_worker_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.timeouts"></a>

```python
timeouts: DataprocAutoscalingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#timeouts DataprocAutoscalingPolicy#timeouts}

---

##### `worker_config`<sup>Optional</sup> <a name="worker_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.workerConfig"></a>

```python
worker_config: DataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#worker_config DataprocAutoscalingPolicy#worker_config}

---

### DataprocAutoscalingPolicySecondaryWorkerConfig <a name="DataprocAutoscalingPolicySecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

### DataprocAutoscalingPolicyTimeouts <a name="DataprocAutoscalingPolicyTimeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}.

---

### DataprocAutoscalingPolicyWorkerConfig <a name="DataprocAutoscalingPolicyWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig(
  max_instances: typing.Union[int, float],
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocAutoscalingPolicyBasicAlgorithmOutputReference <a name="DataprocAutoscalingPolicyBasicAlgorithmOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig">put_yarn_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod">reset_cooldown_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_yarn_config` <a name="put_yarn_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig"></a>

```python
def put_yarn_config(
  graceful_decommission_timeout: str,
  scale_down_factor: typing.Union[int, float],
  scale_up_factor: typing.Union[int, float],
  scale_down_min_worker_fraction: typing.Union[int, float] = None,
  scale_up_min_worker_fraction: typing.Union[int, float] = None
) -> None
```

###### `graceful_decommission_timeout`<sup>Required</sup> <a name="graceful_decommission_timeout" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.gracefulDecommissionTimeout"></a>

- *Type:* str

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#graceful_decommission_timeout DataprocAutoscalingPolicy#graceful_decommission_timeout}

---

###### `scale_down_factor`<sup>Required</sup> <a name="scale_down_factor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleDownFactor"></a>

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_factor DataprocAutoscalingPolicy#scale_down_factor}

---

###### `scale_up_factor`<sup>Required</sup> <a name="scale_up_factor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleUpFactor"></a>

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_factor DataprocAutoscalingPolicy#scale_up_factor}

---

###### `scale_down_min_worker_fraction`<sup>Optional</sup> <a name="scale_down_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleDownMinWorkerFraction"></a>

- *Type:* typing.Union[int, float]

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_min_worker_fraction DataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

###### `scale_up_min_worker_fraction`<sup>Optional</sup> <a name="scale_up_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleUpMinWorkerFraction"></a>

- *Type:* typing.Union[int, float]

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_min_worker_fraction DataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

##### `reset_cooldown_period` <a name="reset_cooldown_period" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod"></a>

```python
def reset_cooldown_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig">yarn_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput">cooldown_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput">yarn_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `yarn_config`<sup>Required</sup> <a name="yarn_config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig"></a>

```python
yarn_config: DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a>

---

##### `cooldown_period_input`<sup>Optional</sup> <a name="cooldown_period_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput"></a>

```python
cooldown_period_input: str
```

- *Type:* str

---

##### `yarn_config_input`<sup>Optional</sup> <a name="yarn_config_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput"></a>

```python
yarn_config_input: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `cooldown_period`<sup>Required</sup> <a name="cooldown_period" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue"></a>

```python
internal_value: DataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---


### DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference <a name="DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction">reset_scale_down_min_worker_fraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction">reset_scale_up_min_worker_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scale_down_min_worker_fraction` <a name="reset_scale_down_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction"></a>

```python
def reset_scale_down_min_worker_fraction() -> None
```

##### `reset_scale_up_min_worker_fraction` <a name="reset_scale_up_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction"></a>

```python
def reset_scale_up_min_worker_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput">graceful_decommission_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput">scale_down_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput">scale_down_min_worker_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput">scale_up_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput">scale_up_min_worker_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout">graceful_decommission_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor">scale_down_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction">scale_down_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor">scale_up_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction">scale_up_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graceful_decommission_timeout_input`<sup>Optional</sup> <a name="graceful_decommission_timeout_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput"></a>

```python
graceful_decommission_timeout_input: str
```

- *Type:* str

---

##### `scale_down_factor_input`<sup>Optional</sup> <a name="scale_down_factor_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput"></a>

```python
scale_down_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_down_min_worker_fraction_input`<sup>Optional</sup> <a name="scale_down_min_worker_fraction_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput"></a>

```python
scale_down_min_worker_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_factor_input`<sup>Optional</sup> <a name="scale_up_factor_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput"></a>

```python
scale_up_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_min_worker_fraction_input`<sup>Optional</sup> <a name="scale_up_min_worker_fraction_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput"></a>

```python
scale_up_min_worker_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `graceful_decommission_timeout`<sup>Required</sup> <a name="graceful_decommission_timeout" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout"></a>

```python
graceful_decommission_timeout: str
```

- *Type:* str

---

##### `scale_down_factor`<sup>Required</sup> <a name="scale_down_factor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor"></a>

```python
scale_down_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_down_min_worker_fraction`<sup>Required</sup> <a name="scale_down_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction"></a>

```python
scale_down_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_factor`<sup>Required</sup> <a name="scale_up_factor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor"></a>

```python
scale_up_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_min_worker_fraction`<sup>Required</sup> <a name="scale_up_min_worker_fraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction"></a>

```python
scale_up_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---


### DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference <a name="DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---


### DataprocAutoscalingPolicyTimeoutsOutputReference <a name="DataprocAutoscalingPolicyTimeoutsOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataprocAutoscalingPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>, cdktf.IResolvable]

---


### DataprocAutoscalingPolicyWorkerConfigOutputReference <a name="DataprocAutoscalingPolicyWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy

dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---



