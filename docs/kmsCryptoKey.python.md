# `kmsCryptoKey` Submodule <a name="`kmsCryptoKey` Submodule" id="@cdktf/provider-google.kmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCryptoKey <a name="KmsCryptoKey" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_ring: str,
  name: str,
  destroy_scheduled_duration: str = None,
  id: str = None,
  import_only: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  purpose: str = None,
  rotation_period: str = None,
  skip_initial_version_creation: typing.Union[bool, IResolvable] = None,
  timeouts: KmsCryptoKeyTimeouts = None,
  version_template: KmsCryptoKeyVersionTemplate = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.keyRing">key_ring</a></code> | <code>str</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.destroyScheduledDuration">destroy_scheduled_duration</a></code> | <code>str</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.importOnly">import_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>str</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.skipInitialVersionCreation">skip_initial_version_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.versionTemplate">version_template</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.keyRing"></a>

- *Type:* str

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#key_ring KmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#name KmsCryptoKey#name}

---

##### `destroy_scheduled_duration`<sup>Optional</sup> <a name="destroy_scheduled_duration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.destroyScheduledDuration"></a>

- *Type:* str

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#destroy_scheduled_duration KmsCryptoKey#destroy_scheduled_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_only`<sup>Optional</sup> <a name="import_only" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.importOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#import_only KmsCryptoKey#import_only}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels with user-defined metadata to apply to this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#labels KmsCryptoKey#labels}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.purpose"></a>

- *Type:* str

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#purpose KmsCryptoKey#purpose}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.rotationPeriod"></a>

- *Type:* str

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#rotation_period KmsCryptoKey#rotation_period}

---

##### `skip_initial_version_creation`<sup>Optional</sup> <a name="skip_initial_version_creation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.skipInitialVersionCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#skip_initial_version_creation KmsCryptoKey#skip_initial_version_creation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#timeouts KmsCryptoKey#timeouts}

---

##### `version_template`<sup>Optional</sup> <a name="version_template" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.versionTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#version_template KmsCryptoKey#version_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate">put_version_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetDestroyScheduledDuration">reset_destroy_scheduled_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetImportOnly">reset_import_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetPurpose">reset_purpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetSkipInitialVersionCreation">reset_skip_initial_version_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetVersionTemplate">reset_version_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#create KmsCryptoKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#delete KmsCryptoKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#update KmsCryptoKey#update}.

---

##### `put_version_template` <a name="put_version_template" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate"></a>

```python
def put_version_template(
  algorithm: str,
  protection_level: str = None
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate.parameter.algorithm"></a>

- *Type:* str

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#algorithm KmsCryptoKey#algorithm}

---

###### `protection_level`<sup>Optional</sup> <a name="protection_level" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate.parameter.protectionLevel"></a>

- *Type:* str

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#protection_level KmsCryptoKey#protection_level}

---

##### `reset_destroy_scheduled_duration` <a name="reset_destroy_scheduled_duration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetDestroyScheduledDuration"></a>

```python
def reset_destroy_scheduled_duration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_only` <a name="reset_import_only" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetImportOnly"></a>

```python
def reset_import_only() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_purpose` <a name="reset_purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetPurpose"></a>

```python
def reset_purpose() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```

##### `reset_skip_initial_version_creation` <a name="reset_skip_initial_version_creation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetSkipInitialVersionCreation"></a>

```python
def reset_skip_initial_version_creation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_template` <a name="reset_version_template" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetVersionTemplate"></a>

```python
def reset_version_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsCryptoKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsCryptoKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsCryptoKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsCryptoKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsCryptoKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList">KmsCryptoKeyPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference">KmsCryptoKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplate">version_template</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference">KmsCryptoKeyVersionTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDurationInput">destroy_scheduled_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnlyInput">import_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRingInput">key_ring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriodInput">rotation_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreationInput">skip_initial_version_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplateInput">version_template_input</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDuration">destroy_scheduled_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnly">import_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRing">key_ring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreation">skip_initial_version_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.primary"></a>

```python
primary: KmsCryptoKeyPrimaryList
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList">KmsCryptoKeyPrimaryList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeouts"></a>

```python
timeouts: KmsCryptoKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference">KmsCryptoKeyTimeoutsOutputReference</a>

---

##### `version_template`<sup>Required</sup> <a name="version_template" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplate"></a>

```python
version_template: KmsCryptoKeyVersionTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference">KmsCryptoKeyVersionTemplateOutputReference</a>

---

##### `destroy_scheduled_duration_input`<sup>Optional</sup> <a name="destroy_scheduled_duration_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDurationInput"></a>

```python
destroy_scheduled_duration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_only_input`<sup>Optional</sup> <a name="import_only_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnlyInput"></a>

```python
import_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_ring_input`<sup>Optional</sup> <a name="key_ring_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRingInput"></a>

```python
key_ring_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriodInput"></a>

```python
rotation_period_input: str
```

- *Type:* str

---

##### `skip_initial_version_creation_input`<sup>Optional</sup> <a name="skip_initial_version_creation_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreationInput"></a>

```python
skip_initial_version_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KmsCryptoKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>]

---

##### `version_template_input`<sup>Optional</sup> <a name="version_template_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplateInput"></a>

```python
version_template_input: KmsCryptoKeyVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---

##### `destroy_scheduled_duration`<sup>Required</sup> <a name="destroy_scheduled_duration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDuration"></a>

```python
destroy_scheduled_duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_only`<sup>Required</sup> <a name="import_only" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnly"></a>

```python
import_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `skip_initial_version_creation`<sup>Required</sup> <a name="skip_initial_version_creation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreation"></a>

```python
skip_initial_version_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCryptoKeyConfig <a name="KmsCryptoKeyConfig" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_ring: str,
  name: str,
  destroy_scheduled_duration: str = None,
  id: str = None,
  import_only: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  purpose: str = None,
  rotation_period: str = None,
  skip_initial_version_creation: typing.Union[bool, IResolvable] = None,
  timeouts: KmsCryptoKeyTimeouts = None,
  version_template: KmsCryptoKeyVersionTemplate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.keyRing">key_ring</a></code> | <code>str</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.name">name</a></code> | <code>str</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.destroyScheduledDuration">destroy_scheduled_duration</a></code> | <code>str</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.importOnly">import_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.purpose">purpose</a></code> | <code>str</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.skipInitialVersionCreation">skip_initial_version_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.versionTemplate">version_template</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#key_ring KmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#name KmsCryptoKey#name}

---

##### `destroy_scheduled_duration`<sup>Optional</sup> <a name="destroy_scheduled_duration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.destroyScheduledDuration"></a>

```python
destroy_scheduled_duration: str
```

- *Type:* str

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#destroy_scheduled_duration KmsCryptoKey#destroy_scheduled_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_only`<sup>Optional</sup> <a name="import_only" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.importOnly"></a>

```python
import_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#import_only KmsCryptoKey#import_only}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels with user-defined metadata to apply to this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#labels KmsCryptoKey#labels}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#purpose KmsCryptoKey#purpose}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#rotation_period KmsCryptoKey#rotation_period}

---

##### `skip_initial_version_creation`<sup>Optional</sup> <a name="skip_initial_version_creation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.skipInitialVersionCreation"></a>

```python
skip_initial_version_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#skip_initial_version_creation KmsCryptoKey#skip_initial_version_creation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.timeouts"></a>

```python
timeouts: KmsCryptoKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#timeouts KmsCryptoKey#timeouts}

---

##### `version_template`<sup>Optional</sup> <a name="version_template" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.versionTemplate"></a>

```python
version_template: KmsCryptoKeyVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#version_template KmsCryptoKey#version_template}

---

### KmsCryptoKeyPrimary <a name="KmsCryptoKeyPrimary" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyPrimary()
```


### KmsCryptoKeyTimeouts <a name="KmsCryptoKeyTimeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#create KmsCryptoKey#create}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#delete KmsCryptoKey#delete}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#update KmsCryptoKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#create KmsCryptoKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#delete KmsCryptoKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#update KmsCryptoKey#update}.

---

### KmsCryptoKeyVersionTemplate <a name="KmsCryptoKeyVersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyVersionTemplate(
  algorithm: str,
  protection_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.algorithm">algorithm</a></code> | <code>str</code> | The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.protectionLevel">protection_level</a></code> | <code>str</code> | The protection level to use when creating a version based on this template. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#algorithm KmsCryptoKey#algorithm}

---

##### `protection_level`<sup>Optional</sup> <a name="protection_level" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/kms_crypto_key#protection_level KmsCryptoKey#protection_level}

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCryptoKeyPrimaryList <a name="KmsCryptoKeyPrimaryList" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyPrimaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsCryptoKeyPrimaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsCryptoKeyPrimaryOutputReference <a name="KmsCryptoKeyPrimaryOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary">KmsCryptoKeyPrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimaryOutputReference.property.internalValue"></a>

```python
internal_value: KmsCryptoKeyPrimary
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyPrimary">KmsCryptoKeyPrimary</a>

---


### KmsCryptoKeyTimeoutsOutputReference <a name="KmsCryptoKeyTimeoutsOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsCryptoKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>]

---


### KmsCryptoKeyVersionTemplateOutputReference <a name="KmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_crypto_key

kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel">reset_protection_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_protection_level` <a name="reset_protection_level" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel"></a>

```python
def reset_protection_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput">protection_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">protection_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `protection_level_input`<sup>Optional</sup> <a name="protection_level_input" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput"></a>

```python
protection_level_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```python
internal_value: KmsCryptoKeyVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---



