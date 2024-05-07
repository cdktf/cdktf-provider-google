# `kmsKeyRingImportJob` Submodule <a name="`kmsKeyRingImportJob` Submodule" id="@cdktf/provider-google.kmsKeyRingImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyRingImportJob <a name="KmsKeyRingImportJob" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job google_kms_key_ring_import_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  import_job_id: str,
  import_method: str,
  key_ring: str,
  protection_level: str,
  id: str = None,
  timeouts: KmsKeyRingImportJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.importJobId">import_job_id</a></code> | <code>str</code> | It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.importMethod">import_method</a></code> | <code>str</code> | The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"]. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.keyRing">key_ring</a></code> | <code>str</code> | The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.protectionLevel">protection_level</a></code> | <code>str</code> | The protection level of the ImportJob. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#id KmsKeyRingImportJob#id}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `import_job_id`<sup>Required</sup> <a name="import_job_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.importJobId"></a>

- *Type:* str

It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#import_job_id KmsKeyRingImportJob#import_job_id}

---

##### `import_method`<sup>Required</sup> <a name="import_method" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.importMethod"></a>

- *Type:* str

The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#import_method KmsKeyRingImportJob#import_method}

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.keyRing"></a>

- *Type:* str

The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#key_ring KmsKeyRingImportJob#key_ring}

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.protectionLevel"></a>

- *Type:* str

The protection level of the ImportJob.

This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#protection_level KmsKeyRingImportJob#protection_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#id KmsKeyRingImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#timeouts KmsKeyRingImportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#create KmsKeyRingImportJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#delete KmsKeyRingImportJob#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsKeyRingImportJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsKeyRingImportJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsKeyRingImportJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsKeyRingImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsKeyRingImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList">KmsKeyRingImportJobAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.publicKey">public_key</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList">KmsKeyRingImportJobPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference">KmsKeyRingImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobIdInput">import_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethodInput">import_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRingInput">key_ring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevelInput">protection_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobId">import_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethod">import_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRing">key_ring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevel">protection_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.attestation"></a>

```python
attestation: KmsKeyRingImportJobAttestationList
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList">KmsKeyRingImportJobAttestationList</a>

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.publicKey"></a>

```python
public_key: KmsKeyRingImportJobPublicKeyList
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList">KmsKeyRingImportJobPublicKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeouts"></a>

```python
timeouts: KmsKeyRingImportJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference">KmsKeyRingImportJobTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_job_id_input`<sup>Optional</sup> <a name="import_job_id_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobIdInput"></a>

```python
import_job_id_input: str
```

- *Type:* str

---

##### `import_method_input`<sup>Optional</sup> <a name="import_method_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethodInput"></a>

```python
import_method_input: str
```

- *Type:* str

---

##### `key_ring_input`<sup>Optional</sup> <a name="key_ring_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRingInput"></a>

```python
key_ring_input: str
```

- *Type:* str

---

##### `protection_level_input`<sup>Optional</sup> <a name="protection_level_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevelInput"></a>

```python
protection_level_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KmsKeyRingImportJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_job_id`<sup>Required</sup> <a name="import_job_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importJobId"></a>

```python
import_job_id: str
```

- *Type:* str

---

##### `import_method`<sup>Required</sup> <a name="import_method" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.importMethod"></a>

```python
import_method: str
```

- *Type:* str

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyRingImportJobAttestation <a name="KmsKeyRingImportJobAttestation" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobAttestation()
```


### KmsKeyRingImportJobConfig <a name="KmsKeyRingImportJobConfig" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  import_job_id: str,
  import_method: str,
  key_ring: str,
  protection_level: str,
  id: str = None,
  timeouts: KmsKeyRingImportJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importJobId">import_job_id</a></code> | <code>str</code> | It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importMethod">import_method</a></code> | <code>str</code> | The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"]. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.keyRing">key_ring</a></code> | <code>str</code> | The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.protectionLevel">protection_level</a></code> | <code>str</code> | The protection level of the ImportJob. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#id KmsKeyRingImportJob#id}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `import_job_id`<sup>Required</sup> <a name="import_job_id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importJobId"></a>

```python
import_job_id: str
```

- *Type:* str

It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#import_job_id KmsKeyRingImportJob#import_job_id}

---

##### `import_method`<sup>Required</sup> <a name="import_method" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.importMethod"></a>

```python
import_method: str
```

- *Type:* str

The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#import_method KmsKeyRingImportJob#import_method}

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#key_ring KmsKeyRingImportJob#key_ring}

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

The protection level of the ImportJob.

This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#protection_level KmsKeyRingImportJob#protection_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#id KmsKeyRingImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobConfig.property.timeouts"></a>

```python
timeouts: KmsKeyRingImportJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#timeouts KmsKeyRingImportJob#timeouts}

---

### KmsKeyRingImportJobPublicKey <a name="KmsKeyRingImportJobPublicKey" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey()
```


### KmsKeyRingImportJobTimeouts <a name="KmsKeyRingImportJobTimeouts" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#create KmsKeyRingImportJob#create}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#delete KmsKeyRingImportJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#create KmsKeyRingImportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/kms_key_ring_import_job#delete KmsKeyRingImportJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsKeyRingImportJobAttestationList <a name="KmsKeyRingImportJobAttestationList" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsKeyRingImportJobAttestationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsKeyRingImportJobAttestationOutputReference <a name="KmsKeyRingImportJobAttestationOutputReference" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation">KmsKeyRingImportJobAttestation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestationOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyRingImportJobAttestation
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobAttestation">KmsKeyRingImportJobAttestation</a>

---


### KmsKeyRingImportJobPublicKeyList <a name="KmsKeyRingImportJobPublicKeyList" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsKeyRingImportJobPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsKeyRingImportJobPublicKeyOutputReference <a name="KmsKeyRingImportJobPublicKeyOutputReference" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.pem">pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey">KmsKeyRingImportJobPublicKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.pem"></a>

```python
pem: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKeyOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyRingImportJobPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobPublicKey">KmsKeyRingImportJobPublicKey</a>

---


### KmsKeyRingImportJobTimeoutsOutputReference <a name="KmsKeyRingImportJobTimeoutsOutputReference" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_key_ring_import_job

kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsKeyRingImportJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsKeyRingImportJob.KmsKeyRingImportJobTimeouts">KmsKeyRingImportJobTimeouts</a>]

---



