# `computeInstanceTemplate` Submodule <a name="`computeInstanceTemplate` Submodule" id="@cdktf/provider-google.computeInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceTemplate <a name="ComputeInstanceTemplate" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template google_compute_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateDisk]],
  machine_type: str,
  advanced_machine_features: ComputeInstanceTemplateAdvancedMachineFeatures = None,
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  confidential_instance_config: ComputeInstanceTemplateConfidentialInstanceConfig = None,
  description: str = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateGuestAccelerator]] = None,
  id: str = None,
  instance_description: str = None,
  key_revocation_action_type: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  metadata_startup_script: str = None,
  min_cpu_platform: str = None,
  name: str = None,
  name_prefix: str = None,
  network_interface: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterface]] = None,
  network_performance_config: ComputeInstanceTemplateNetworkPerformanceConfig = None,
  project: str = None,
  region: str = None,
  reservation_affinity: ComputeInstanceTemplateReservationAffinity = None,
  resource_manager_tags: typing.Mapping[str] = None,
  resource_policies: typing.List[str] = None,
  scheduling: ComputeInstanceTemplateScheduling = None,
  service_account: ComputeInstanceTemplateServiceAccount = None,
  shielded_instance_config: ComputeInstanceTemplateShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  timeouts: ComputeInstanceTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.guestAccelerator">guest_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#id ComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.instanceDescription">instance_description</a></code> | <code>str</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.region">region</a></code> | <code>str</code> | An instance template is a global resource that is not bound to a zone or a region. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.disk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#disk ComputeInstanceTemplate#disk}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.machineType"></a>

- *Type:* str

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#machine_type ComputeInstanceTemplate#machine_type}

---

##### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#advanced_machine_features ComputeInstanceTemplate#advanced_machine_features}

---

##### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.canIpForward"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#can_ip_forward ComputeInstanceTemplate#can_ip_forward}

---

##### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.confidentialInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#confidential_instance_config ComputeInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.description"></a>

- *Type:* str

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#description ComputeInstanceTemplate#description}

---

##### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.guestAccelerator"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#guest_accelerator ComputeInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#id ComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_description`<sup>Optional</sup> <a name="instance_description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.instanceDescription"></a>

- *Type:* str

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#instance_description ComputeInstanceTemplate#instance_description}

---

##### `key_revocation_action_type`<sup>Optional</sup> <a name="key_revocation_action_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.keyRevocationActionType"></a>

- *Type:* str

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#key_revocation_action_type ComputeInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to instances created from this template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#labels ComputeInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#metadata ComputeInstanceTemplate#metadata}

---

##### `metadata_startup_script`<sup>Optional</sup> <a name="metadata_startup_script" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.metadataStartupScript"></a>

- *Type:* str

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#metadata_startup_script ComputeInstanceTemplate#metadata_startup_script}

---

##### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.minCpuPlatform"></a>

- *Type:* str

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#min_cpu_platform ComputeInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#name ComputeInstanceTemplate#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.namePrefix"></a>

- *Type:* str

Creates a unique name beginning with the specified prefix.

Conflicts with name. Max length is 54 characters. Prefixes with lengths longer than 37 characters will use a shortened UUID that will be more prone to collisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#name_prefix ComputeInstanceTemplate#name_prefix}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network_interface ComputeInstanceTemplate#network_interface}

---

##### `network_performance_config`<sup>Optional</sup> <a name="network_performance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.networkPerformanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network_performance_config ComputeInstanceTemplate#network_performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#project ComputeInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.region"></a>

- *Type:* str

An instance template is a global resource that is not bound to a zone or a region.

However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#region ComputeInstanceTemplate#region}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#reservation_affinity ComputeInstanceTemplate#reservation_affinity}

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.resourceManagerTags"></a>

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#resource_manager_tags ComputeInstanceTemplate#resource_manager_tags}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.resourcePolicies"></a>

- *Type:* typing.List[str]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#resource_policies ComputeInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#scheduling ComputeInstanceTemplate#scheduling}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#service_account ComputeInstanceTemplate#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#shielded_instance_config ComputeInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#tags ComputeInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#timeouts ComputeInstanceTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures">put_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putConfidentialInstanceConfig">put_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putDisk">put_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putGuestAccelerator">put_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkPerformanceConfig">put_network_performance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling">put_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putServiceAccount">put_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetAdvancedMachineFeatures">reset_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetCanIpForward">reset_can_ip_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetConfidentialInstanceConfig">reset_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetGuestAccelerator">reset_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetInstanceDescription">reset_instance_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetKeyRevocationActionType">reset_key_revocation_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadataStartupScript">reset_metadata_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMinCpuPlatform">reset_min_cpu_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkPerformanceConfig">reset_network_performance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourcePolicies">reset_resource_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetScheduling">reset_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_machine_features` <a name="put_advanced_machine_features" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures"></a>

```python
def put_advanced_machine_features(
  enable_nested_virtualization: typing.Union[bool, IResolvable] = None,
  enable_uefi_networking: typing.Union[bool, IResolvable] = None,
  performance_monitoring_unit: str = None,
  threads_per_core: typing.Union[int, float] = None,
  turbo_mode: str = None,
  visible_core_count: typing.Union[int, float] = None
) -> None
```

###### `enable_nested_virtualization`<sup>Optional</sup> <a name="enable_nested_virtualization" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.enableNestedVirtualization"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_nested_virtualization ComputeInstanceTemplate#enable_nested_virtualization}

---

###### `enable_uefi_networking`<sup>Optional</sup> <a name="enable_uefi_networking" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.enableUefiNetworking"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_uefi_networking ComputeInstanceTemplate#enable_uefi_networking}

---

###### `performance_monitoring_unit`<sup>Optional</sup> <a name="performance_monitoring_unit" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.performanceMonitoringUnit"></a>

- *Type:* str

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#performance_monitoring_unit ComputeInstanceTemplate#performance_monitoring_unit}

---

###### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#threads_per_core ComputeInstanceTemplate#threads_per_core}

---

###### `turbo_mode`<sup>Optional</sup> <a name="turbo_mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.turboMode"></a>

- *Type:* str

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#turbo_mode ComputeInstanceTemplate#turbo_mode}

---

###### `visible_core_count`<sup>Optional</sup> <a name="visible_core_count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.visibleCoreCount"></a>

- *Type:* typing.Union[int, float]

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#visible_core_count ComputeInstanceTemplate#visible_core_count}

---

##### `put_confidential_instance_config` <a name="put_confidential_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putConfidentialInstanceConfig"></a>

```python
def put_confidential_instance_config(
  confidential_instance_type: str = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None
) -> None
```

###### `confidential_instance_type`<sup>Optional</sup> <a name="confidential_instance_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putConfidentialInstanceConfig.parameter.confidentialInstanceType"></a>

- *Type:* str

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#confidential_instance_type ComputeInstanceTemplate#confidential_instance_type}

---

###### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putConfidentialInstanceConfig.parameter.enableConfidentialCompute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_confidential_compute ComputeInstanceTemplate#enable_confidential_compute}

---

##### `put_disk` <a name="put_disk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putDisk"></a>

```python
def put_disk(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]

---

##### `put_guest_accelerator` <a name="put_guest_accelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putGuestAccelerator"></a>

```python
def put_guest_accelerator(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateGuestAccelerator]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]

---

##### `put_network_performance_config` <a name="put_network_performance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkPerformanceConfig"></a>

```python
def put_network_performance_config(
  total_egress_bandwidth_tier: str
) -> None
```

###### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkPerformanceConfig.parameter.totalEgressBandwidthTier"></a>

- *Type:* str

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#total_egress_bandwidth_tier ComputeInstanceTemplate#total_egress_bandwidth_tier}

---

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  type: str,
  specific_reservation: ComputeInstanceTemplateReservationAffinitySpecificReservation = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putReservationAffinity.parameter.type"></a>

- *Type:* str

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#type ComputeInstanceTemplate#type}

---

###### `specific_reservation`<sup>Optional</sup> <a name="specific_reservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putReservationAffinity.parameter.specificReservation"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#specific_reservation ComputeInstanceTemplate#specific_reservation}

---

##### `put_scheduling` <a name="put_scheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling"></a>

```python
def put_scheduling(
  automatic_restart: typing.Union[bool, IResolvable] = None,
  availability_domain: typing.Union[int, float] = None,
  instance_termination_action: str = None,
  local_ssd_recovery_timeout: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]] = None,
  max_run_duration: ComputeInstanceTemplateSchedulingMaxRunDuration = None,
  min_node_cpus: typing.Union[int, float] = None,
  node_affinities: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingNodeAffinities]] = None,
  on_host_maintenance: str = None,
  on_instance_stop_action: ComputeInstanceTemplateSchedulingOnInstanceStopAction = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  provisioning_model: str = None,
  termination_time: str = None
) -> None
```

###### `automatic_restart`<sup>Optional</sup> <a name="automatic_restart" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.automaticRestart"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#automatic_restart ComputeInstanceTemplate#automatic_restart}

---

###### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.availabilityDomain"></a>

- *Type:* typing.Union[int, float]

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#availability_domain ComputeInstanceTemplate#availability_domain}

---

###### `instance_termination_action`<sup>Optional</sup> <a name="instance_termination_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.instanceTerminationAction"></a>

- *Type:* str

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#instance_termination_action ComputeInstanceTemplate#instance_termination_action}

---

###### `local_ssd_recovery_timeout`<sup>Optional</sup> <a name="local_ssd_recovery_timeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.localSsdRecoveryTimeout"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#local_ssd_recovery_timeout ComputeInstanceTemplate#local_ssd_recovery_timeout}

---

###### `max_run_duration`<sup>Optional</sup> <a name="max_run_duration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.maxRunDuration"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#max_run_duration ComputeInstanceTemplate#max_run_duration}

---

###### `min_node_cpus`<sup>Optional</sup> <a name="min_node_cpus" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.minNodeCpus"></a>

- *Type:* typing.Union[int, float]

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#min_node_cpus ComputeInstanceTemplate#min_node_cpus}

---

###### `node_affinities`<sup>Optional</sup> <a name="node_affinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.nodeAffinities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#node_affinities ComputeInstanceTemplate#node_affinities}

---

###### `on_host_maintenance`<sup>Optional</sup> <a name="on_host_maintenance" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.onHostMaintenance"></a>

- *Type:* str

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#on_host_maintenance ComputeInstanceTemplate#on_host_maintenance}

---

###### `on_instance_stop_action`<sup>Optional</sup> <a name="on_instance_stop_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.onInstanceStopAction"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#on_instance_stop_action ComputeInstanceTemplate#on_instance_stop_action}

---

###### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.preemptible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#preemptible ComputeInstanceTemplate#preemptible}

---

###### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.provisioningModel"></a>

- *Type:* str

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#provisioning_model ComputeInstanceTemplate#provisioning_model}

---

###### `termination_time`<sup>Optional</sup> <a name="termination_time" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.terminationTime"></a>

- *Type:* str

Specifies the timestamp, when the instance will be terminated, in RFC3339 text format.

If specified, the instance termination action
will be performed at the termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#termination_time ComputeInstanceTemplate#termination_time}

---

##### `put_service_account` <a name="put_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putServiceAccount"></a>

```python
def put_service_account(
  scopes: typing.List[str],
  email: str = None
) -> None
```

###### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putServiceAccount.parameter.scopes"></a>

- *Type:* typing.List[str]

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#scopes ComputeInstanceTemplate#scopes}

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putServiceAccount.parameter.email"></a>

- *Type:* str

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#email ComputeInstanceTemplate#email}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_integrity_monitoring ComputeInstanceTemplate#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_secure_boot ComputeInstanceTemplate#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_vtpm ComputeInstanceTemplate#enable_vtpm}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#create ComputeInstanceTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#delete ComputeInstanceTemplate#delete}.

---

##### `reset_advanced_machine_features` <a name="reset_advanced_machine_features" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetAdvancedMachineFeatures"></a>

```python
def reset_advanced_machine_features() -> None
```

##### `reset_can_ip_forward` <a name="reset_can_ip_forward" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetCanIpForward"></a>

```python
def reset_can_ip_forward() -> None
```

##### `reset_confidential_instance_config` <a name="reset_confidential_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetConfidentialInstanceConfig"></a>

```python
def reset_confidential_instance_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_guest_accelerator` <a name="reset_guest_accelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetGuestAccelerator"></a>

```python
def reset_guest_accelerator() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_description` <a name="reset_instance_description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetInstanceDescription"></a>

```python
def reset_instance_description() -> None
```

##### `reset_key_revocation_action_type` <a name="reset_key_revocation_action_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetKeyRevocationActionType"></a>

```python
def reset_key_revocation_action_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_metadata_startup_script` <a name="reset_metadata_startup_script" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadataStartupScript"></a>

```python
def reset_metadata_startup_script() -> None
```

##### `reset_min_cpu_platform` <a name="reset_min_cpu_platform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMinCpuPlatform"></a>

```python
def reset_min_cpu_platform() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_network_performance_config` <a name="reset_network_performance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkPerformanceConfig"></a>

```python
def reset_network_performance_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```

##### `reset_resource_policies` <a name="reset_resource_policies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourcePolicies"></a>

```python
def reset_resource_policies() -> None
```

##### `reset_scheduling` <a name="reset_scheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetScheduling"></a>

```python
def reset_scheduling() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInstanceTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList">ComputeInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAccelerator">guest_accelerator</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList">ComputeInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataFingerprint">metadata_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList">ComputeInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference">ComputeInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference">ComputeInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLinkUnique">self_link_unique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference">ComputeInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference">ComputeInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsFingerprint">tags_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference">ComputeInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeaturesInput">advanced_machine_features_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForwardInput">can_ip_forward_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfigInput">confidential_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.diskInput">disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAcceleratorInput">guest_accelerator_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescriptionInput">instance_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionTypeInput">key_revocation_action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScriptInput">metadata_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatformInput">min_cpu_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfigInput">network_performance_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePoliciesInput">resource_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.schedulingInput">scheduling_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccountInput">service_account_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescription">instance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `confidential_instance_config`<sup>Required</sup> <a name="confidential_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: ComputeInstanceTemplateConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.disk"></a>

```python
disk: ComputeInstanceTemplateDiskList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList">ComputeInstanceTemplateDiskList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `guest_accelerator`<sup>Required</sup> <a name="guest_accelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAccelerator"></a>

```python
guest_accelerator: ComputeInstanceTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList">ComputeInstanceTemplateGuestAcceleratorList</a>

---

##### `metadata_fingerprint`<sup>Required</sup> <a name="metadata_fingerprint" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataFingerprint"></a>

```python
metadata_fingerprint: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterface"></a>

```python
network_interface: ComputeInstanceTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList">ComputeInstanceTemplateNetworkInterfaceList</a>

---

##### `network_performance_config`<sup>Required</sup> <a name="network_performance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfig"></a>

```python
network_performance_config: ComputeInstanceTemplateNetworkPerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinity"></a>

```python
reservation_affinity: ComputeInstanceTemplateReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference">ComputeInstanceTemplateReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.scheduling"></a>

```python
scheduling: ComputeInstanceTemplateSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference">ComputeInstanceTemplateSchedulingOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_unique`<sup>Required</sup> <a name="self_link_unique" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLinkUnique"></a>

```python
self_link_unique: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccount"></a>

```python
service_account: ComputeInstanceTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference">ComputeInstanceTemplateServiceAccountOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: ComputeInstanceTemplateShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference">ComputeInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `tags_fingerprint`<sup>Required</sup> <a name="tags_fingerprint" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsFingerprint"></a>

```python
tags_fingerprint: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeouts"></a>

```python
timeouts: ComputeInstanceTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference">ComputeInstanceTemplateTimeoutsOutputReference</a>

---

##### `advanced_machine_features_input`<sup>Optional</sup> <a name="advanced_machine_features_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```python
advanced_machine_features_input: ComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `can_ip_forward_input`<sup>Optional</sup> <a name="can_ip_forward_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForwardInput"></a>

```python
can_ip_forward_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_instance_config_input`<sup>Optional</sup> <a name="confidential_instance_config_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```python
confidential_instance_config_input: ComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.diskInput"></a>

```python
disk_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]

---

##### `guest_accelerator_input`<sup>Optional</sup> <a name="guest_accelerator_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAcceleratorInput"></a>

```python
guest_accelerator_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_description_input`<sup>Optional</sup> <a name="instance_description_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescriptionInput"></a>

```python
instance_description_input: str
```

- *Type:* str

---

##### `key_revocation_action_type_input`<sup>Optional</sup> <a name="key_revocation_action_type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionTypeInput"></a>

```python
key_revocation_action_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_startup_script_input`<sup>Optional</sup> <a name="metadata_startup_script_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScriptInput"></a>

```python
metadata_startup_script_input: str
```

- *Type:* str

---

##### `min_cpu_platform_input`<sup>Optional</sup> <a name="min_cpu_platform_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatformInput"></a>

```python
min_cpu_platform_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]

---

##### `network_performance_config_input`<sup>Optional</sup> <a name="network_performance_config_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfigInput"></a>

```python
network_performance_config_input: ComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: ComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies_input`<sup>Optional</sup> <a name="resource_policies_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePoliciesInput"></a>

```python
resource_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_input`<sup>Optional</sup> <a name="scheduling_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.schedulingInput"></a>

```python
scheduling_input: ComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccountInput"></a>

```python
service_account_input: ComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: ComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeInstanceTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>]

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_description`<sup>Required</sup> <a name="instance_description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescription"></a>

```python
instance_description: str
```

- *Type:* str

---

##### `key_revocation_action_type`<sup>Required</sup> <a name="key_revocation_action_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionType"></a>

```python
key_revocation_action_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_startup_script`<sup>Required</sup> <a name="metadata_startup_script" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScript"></a>

```python
metadata_startup_script: str
```

- *Type:* str

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceTemplateAdvancedMachineFeatures <a name="ComputeInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures(
  enable_nested_virtualization: typing.Union[bool, IResolvable] = None,
  enable_uefi_networking: typing.Union[bool, IResolvable] = None,
  performance_monitoring_unit: str = None,
  threads_per_core: typing.Union[int, float] = None,
  turbo_mode: str = None,
  visible_core_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking">enable_uefi_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable UEFI networking or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">performance_monitoring_unit</a></code> | <code>str</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode">turbo_mode</a></code> | <code>str</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">visible_core_count</a></code> | <code>typing.Union[int, float]</code> | The number of physical cores to expose to an instance. |

---

##### `enable_nested_virtualization`<sup>Optional</sup> <a name="enable_nested_virtualization" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_nested_virtualization ComputeInstanceTemplate#enable_nested_virtualization}

---

##### `enable_uefi_networking`<sup>Optional</sup> <a name="enable_uefi_networking" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```python
enable_uefi_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_uefi_networking ComputeInstanceTemplate#enable_uefi_networking}

---

##### `performance_monitoring_unit`<sup>Optional</sup> <a name="performance_monitoring_unit" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```python
performance_monitoring_unit: str
```

- *Type:* str

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#performance_monitoring_unit ComputeInstanceTemplate#performance_monitoring_unit}

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#threads_per_core ComputeInstanceTemplate#threads_per_core}

---

##### `turbo_mode`<sup>Optional</sup> <a name="turbo_mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode"></a>

```python
turbo_mode: str
```

- *Type:* str

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#turbo_mode ComputeInstanceTemplate#turbo_mode}

---

##### `visible_core_count`<sup>Optional</sup> <a name="visible_core_count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```python
visible_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#visible_core_count ComputeInstanceTemplate#visible_core_count}

---

### ComputeInstanceTemplateConfidentialInstanceConfig <a name="ComputeInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig(
  confidential_instance_type: str = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType">confidential_instance_type</a></code> | <code>str</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `confidential_instance_type`<sup>Optional</sup> <a name="confidential_instance_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```python
confidential_instance_type: str
```

- *Type:* str

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#confidential_instance_type ComputeInstanceTemplate#confidential_instance_type}

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_confidential_compute ComputeInstanceTemplate#enable_confidential_compute}

---

### ComputeInstanceTemplateConfig <a name="ComputeInstanceTemplateConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateDisk]],
  machine_type: str,
  advanced_machine_features: ComputeInstanceTemplateAdvancedMachineFeatures = None,
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  confidential_instance_config: ComputeInstanceTemplateConfidentialInstanceConfig = None,
  description: str = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateGuestAccelerator]] = None,
  id: str = None,
  instance_description: str = None,
  key_revocation_action_type: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  metadata_startup_script: str = None,
  min_cpu_platform: str = None,
  name: str = None,
  name_prefix: str = None,
  network_interface: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterface]] = None,
  network_performance_config: ComputeInstanceTemplateNetworkPerformanceConfig = None,
  project: str = None,
  region: str = None,
  reservation_affinity: ComputeInstanceTemplateReservationAffinity = None,
  resource_manager_tags: typing.Mapping[str] = None,
  resource_policies: typing.List[str] = None,
  scheduling: ComputeInstanceTemplateScheduling = None,
  service_account: ComputeInstanceTemplateServiceAccount = None,
  shielded_instance_config: ComputeInstanceTemplateShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  timeouts: ComputeInstanceTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.machineType">machine_type</a></code> | <code>str</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.description">description</a></code> | <code>str</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.guestAccelerator">guest_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#id ComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.instanceDescription">instance_description</a></code> | <code>str</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.region">region</a></code> | <code>str</code> | An instance template is a global resource that is not bound to a zone or a region. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.disk"></a>

```python
disk: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#disk ComputeInstanceTemplate#disk}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#machine_type ComputeInstanceTemplate#machine_type}

---

##### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: ComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#advanced_machine_features ComputeInstanceTemplate#advanced_machine_features}

---

##### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#can_ip_forward ComputeInstanceTemplate#can_ip_forward}

---

##### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: ComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#confidential_instance_config ComputeInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#description ComputeInstanceTemplate#description}

---

##### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.guestAccelerator"></a>

```python
guest_accelerator: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#guest_accelerator ComputeInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#id ComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_description`<sup>Optional</sup> <a name="instance_description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.instanceDescription"></a>

```python
instance_description: str
```

- *Type:* str

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#instance_description ComputeInstanceTemplate#instance_description}

---

##### `key_revocation_action_type`<sup>Optional</sup> <a name="key_revocation_action_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.keyRevocationActionType"></a>

```python
key_revocation_action_type: str
```

- *Type:* str

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#key_revocation_action_type ComputeInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to instances created from this template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#labels ComputeInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#metadata ComputeInstanceTemplate#metadata}

---

##### `metadata_startup_script`<sup>Optional</sup> <a name="metadata_startup_script" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadataStartupScript"></a>

```python
metadata_startup_script: str
```

- *Type:* str

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#metadata_startup_script ComputeInstanceTemplate#metadata_startup_script}

---

##### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#min_cpu_platform ComputeInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#name ComputeInstanceTemplate#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Creates a unique name beginning with the specified prefix.

Conflicts with name. Max length is 54 characters. Prefixes with lengths longer than 37 characters will use a shortened UUID that will be more prone to collisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#name_prefix ComputeInstanceTemplate#name_prefix}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network_interface ComputeInstanceTemplate#network_interface}

---

##### `network_performance_config`<sup>Optional</sup> <a name="network_performance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```python
network_performance_config: ComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network_performance_config ComputeInstanceTemplate#network_performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#project ComputeInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

An instance template is a global resource that is not bound to a zone or a region.

However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#region ComputeInstanceTemplate#region}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.reservationAffinity"></a>

```python
reservation_affinity: ComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#reservation_affinity ComputeInstanceTemplate#reservation_affinity}

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#resource_manager_tags ComputeInstanceTemplate#resource_manager_tags}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#resource_policies ComputeInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.scheduling"></a>

```python
scheduling: ComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#scheduling ComputeInstanceTemplate#scheduling}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.serviceAccount"></a>

```python
service_account: ComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#service_account ComputeInstanceTemplate#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: ComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#shielded_instance_config ComputeInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#tags ComputeInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.timeouts"></a>

```python
timeouts: ComputeInstanceTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#timeouts ComputeInstanceTemplate#timeouts}

---

### ComputeInstanceTemplateDisk <a name="ComputeInstanceTemplateDisk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDisk(
  auto_delete: typing.Union[bool, IResolvable] = None,
  boot: typing.Union[bool, IResolvable] = None,
  device_name: str = None,
  disk_encryption_key: ComputeInstanceTemplateDiskDiskEncryptionKey = None,
  disk_name: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  interface: str = None,
  labels: typing.Mapping[str] = None,
  mode: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  resource_manager_tags: typing.Mapping[str] = None,
  resource_policies: typing.List[str] = None,
  source: str = None,
  source_image: str = None,
  source_image_encryption_key: ComputeInstanceTemplateDiskSourceImageEncryptionKey = None,
  source_snapshot: str = None,
  source_snapshot_encryption_key: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.deviceName">device_name</a></code> | <code>str</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskName">disk_name</a></code> | <code>str</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskType">disk_type</a></code> | <code>str</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.interface">interface</a></code> | <code>str</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.mode">mode</a></code> | <code>str</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much throughput to provision for the disk, in MB/s. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.source">source</a></code> | <code>str</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImage">source_image</a></code> | <code>str</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.type">type</a></code> | <code>str</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `auto_delete`<sup>Optional</sup> <a name="auto_delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#auto_delete ComputeInstanceTemplate#auto_delete}

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#boot ComputeInstanceTemplate#boot}

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#device_name ComputeInstanceTemplate#device_name}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskEncryptionKey"></a>

```python
disk_encryption_key: ComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#disk_encryption_key ComputeInstanceTemplate#disk_encryption_key}

---

##### `disk_name`<sup>Optional</sup> <a name="disk_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#disk_name ComputeInstanceTemplate#disk_name}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#disk_size_gb ComputeInstanceTemplate#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#disk_type ComputeInstanceTemplate#disk_type}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.interface"></a>

```python
interface: str
```

- *Type:* str

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#interface ComputeInstanceTemplate#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#labels ComputeInstanceTemplate#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#mode ComputeInstanceTemplate#mode}

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk) or the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks) depending on the selected disk_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#provisioned_iops ComputeInstanceTemplate#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how much throughput to provision for the disk, in MB/s.

This sets the amount of data that can be read or written from the disk per second. Values must greater than or equal to 1. For more details, see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#provisioned_throughput ComputeInstanceTemplate#provisioned_throughput}

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#resource_manager_tags ComputeInstanceTemplate#resource_manager_tags}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#resource_policies ComputeInstanceTemplate#resource_policies}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.source"></a>

```python
source: str
```

- *Type:* str

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#source ComputeInstanceTemplate#source}

---

##### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#source_image ComputeInstanceTemplate#source_image}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: ComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#source_image_encryption_key ComputeInstanceTemplate#source_image_encryption_key}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#source_snapshot ComputeInstanceTemplate#source_snapshot}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#source_snapshot_encryption_key ComputeInstanceTemplate#source_snapshot_encryption_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.type"></a>

```python
type: str
```

- *Type:* str

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#type ComputeInstanceTemplate#type}

---

### ComputeInstanceTemplateDiskDiskEncryptionKey <a name="ComputeInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey(
  kms_key_self_link: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

### ComputeInstanceTemplateDiskSourceImageEncryptionKey <a name="ComputeInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey(
  kms_key_self_link: str,
  kms_key_service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_service_account ComputeInstanceTemplate#kms_key_service_account}

---

### ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey(
  kms_key_self_link: str,
  kms_key_service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_service_account ComputeInstanceTemplate#kms_key_service_account}

---

### ComputeInstanceTemplateGuestAccelerator <a name="ComputeInstanceTemplateGuestAccelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator(
  count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.type">type</a></code> | <code>str</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#count ComputeInstanceTemplate#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.type"></a>

```python
type: str
```

- *Type:* str

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#type ComputeInstanceTemplate#type}

---

### ComputeInstanceTemplateNetworkInterface <a name="ComputeInstanceTemplateNetworkInterface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface(
  access_config: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAccessConfig]] = None,
  alias_ip_range: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAliasIpRange]] = None,
  internal_ipv6_prefix_length: typing.Union[int, float] = None,
  ipv6_access_config: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]] = None,
  ipv6_address: str = None,
  network: str = None,
  network_ip: str = None,
  nic_type: str = None,
  queue_count: typing.Union[int, float] = None,
  stack_type: str = None,
  subnetwork: str = None,
  subnetwork_project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.accessConfig">access_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]</code> | access_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.aliasIpRange">alias_ip_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">internal_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig">ipv6_access_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.network">network</a></code> | <code>str</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.networkIp">network_ip</a></code> | <code>str</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.stackType">stack_type</a></code> | <code>str</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetworkProject">subnetwork_project</a></code> | <code>str</code> | The ID of the project in which the subnetwork belongs. |

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.accessConfig"></a>

```python
access_config: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#access_config ComputeInstanceTemplate#access_config}

---

##### `alias_ip_range`<sup>Optional</sup> <a name="alias_ip_range" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```python
alias_ip_range: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#alias_ip_range ComputeInstanceTemplate#alias_ip_range}

---

##### `internal_ipv6_prefix_length`<sup>Optional</sup> <a name="internal_ipv6_prefix_length" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```python
internal_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#internal_ipv6_prefix_length ComputeInstanceTemplate#internal_ipv6_prefix_length}

---

##### `ipv6_access_config`<sup>Optional</sup> <a name="ipv6_access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```python
ipv6_access_config: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#ipv6_access_config ComputeInstanceTemplate#ipv6_access_config}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#ipv6_address ComputeInstanceTemplate#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.network"></a>

```python
network: str
```

- *Type:* str

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network ComputeInstanceTemplate#network}

---

##### `network_ip`<sup>Optional</sup> <a name="network_ip" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.networkIp"></a>

```python
network_ip: str
```

- *Type:* str

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network_ip ComputeInstanceTemplate#network_ip}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#nic_type ComputeInstanceTemplate#nic_type}

---

##### `queue_count`<sup>Optional</sup> <a name="queue_count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#queue_count ComputeInstanceTemplate#queue_count}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#stack_type ComputeInstanceTemplate#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#subnetwork ComputeInstanceTemplate#subnetwork}

---

##### `subnetwork_project`<sup>Optional</sup> <a name="subnetwork_project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```python
subnetwork_project: str
```

- *Type:* str

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#subnetwork_project ComputeInstanceTemplate#subnetwork_project}

---

### ComputeInstanceTemplateNetworkInterfaceAccessConfig <a name="ComputeInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig(
  nat_ip: str = None,
  network_tier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">nat_ip</a></code> | <code>str</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">network_tier</a></code> | <code>str</code> | The networking tier used for configuring this instance template. |

---

##### `nat_ip`<sup>Optional</sup> <a name="nat_ip" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```python
nat_ip: str
```

- *Type:* str

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#nat_ip ComputeInstanceTemplate#nat_ip}

---

##### `network_tier`<sup>Optional</sup> <a name="network_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network_tier ComputeInstanceTemplate#network_tier}

---

### ComputeInstanceTemplateNetworkInterfaceAliasIpRange <a name="ComputeInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange(
  ip_cidr_range: str,
  subnetwork_range_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#ip_cidr_range ComputeInstanceTemplate#ip_cidr_range}

---

##### `subnetwork_range_name`<sup>Optional</sup> <a name="subnetwork_range_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#subnetwork_range_name ComputeInstanceTemplate#subnetwork_range_name}

---

### ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig(
  network_tier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">network_tier</a></code> | <code>str</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#network_tier ComputeInstanceTemplate#network_tier}

---

### ComputeInstanceTemplateNetworkPerformanceConfig <a name="ComputeInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig(
  total_egress_bandwidth_tier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">total_egress_bandwidth_tier</a></code> | <code>str</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```python
total_egress_bandwidth_tier: str
```

- *Type:* str

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#total_egress_bandwidth_tier ComputeInstanceTemplate#total_egress_bandwidth_tier}

---

### ComputeInstanceTemplateReservationAffinity <a name="ComputeInstanceTemplateReservationAffinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity(
  type: str,
  specific_reservation: ComputeInstanceTemplateReservationAffinitySpecificReservation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.type">type</a></code> | <code>str</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.specificReservation">specific_reservation</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.type"></a>

```python
type: str
```

- *Type:* str

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#type ComputeInstanceTemplate#type}

---

##### `specific_reservation`<sup>Optional</sup> <a name="specific_reservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.specificReservation"></a>

```python
specific_reservation: ComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#specific_reservation ComputeInstanceTemplate#specific_reservation}

---

### ComputeInstanceTemplateReservationAffinitySpecificReservation <a name="ComputeInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.key">key</a></code> | <code>str</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.values">values</a></code> | <code>typing.List[str]</code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```python
key: str
```

- *Type:* str

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#key ComputeInstanceTemplate#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#values ComputeInstanceTemplate#values}

---

### ComputeInstanceTemplateScheduling <a name="ComputeInstanceTemplateScheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateScheduling(
  automatic_restart: typing.Union[bool, IResolvable] = None,
  availability_domain: typing.Union[int, float] = None,
  instance_termination_action: str = None,
  local_ssd_recovery_timeout: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]] = None,
  max_run_duration: ComputeInstanceTemplateSchedulingMaxRunDuration = None,
  min_node_cpus: typing.Union[int, float] = None,
  node_affinities: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingNodeAffinities]] = None,
  on_host_maintenance: str = None,
  on_instance_stop_action: ComputeInstanceTemplateSchedulingOnInstanceStopAction = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  provisioning_model: str = None,
  termination_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.automaticRestart">automatic_restart</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.availabilityDomain">availability_domain</a></code> | <code>typing.Union[int, float]</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.instanceTerminationAction">instance_termination_action</a></code> | <code>str</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout">local_ssd_recovery_timeout</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]</code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.maxRunDuration">max_run_duration</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.minNodeCpus">min_node_cpus</a></code> | <code>typing.Union[int, float]</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.nodeAffinities">node_affinities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onHostMaintenance">on_host_maintenance</a></code> | <code>str</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onInstanceStopAction">on_instance_stop_action</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | Whether the instance is spot. If this is set as SPOT. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.terminationTime">termination_time</a></code> | <code>str</code> | Specifies the timestamp, when the instance will be terminated, in RFC3339 text format. |

---

##### `automatic_restart`<sup>Optional</sup> <a name="automatic_restart" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.automaticRestart"></a>

```python
automatic_restart: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#automatic_restart ComputeInstanceTemplate#automatic_restart}

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.availabilityDomain"></a>

```python
availability_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#availability_domain ComputeInstanceTemplate#availability_domain}

---

##### `instance_termination_action`<sup>Optional</sup> <a name="instance_termination_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```python
instance_termination_action: str
```

- *Type:* str

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#instance_termination_action ComputeInstanceTemplate#instance_termination_action}

---

##### `local_ssd_recovery_timeout`<sup>Optional</sup> <a name="local_ssd_recovery_timeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```python
local_ssd_recovery_timeout: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#local_ssd_recovery_timeout ComputeInstanceTemplate#local_ssd_recovery_timeout}

---

##### `max_run_duration`<sup>Optional</sup> <a name="max_run_duration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.maxRunDuration"></a>

```python
max_run_duration: ComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#max_run_duration ComputeInstanceTemplate#max_run_duration}

---

##### `min_node_cpus`<sup>Optional</sup> <a name="min_node_cpus" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.minNodeCpus"></a>

```python
min_node_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#min_node_cpus ComputeInstanceTemplate#min_node_cpus}

---

##### `node_affinities`<sup>Optional</sup> <a name="node_affinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.nodeAffinities"></a>

```python
node_affinities: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingNodeAffinities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#node_affinities ComputeInstanceTemplate#node_affinities}

---

##### `on_host_maintenance`<sup>Optional</sup> <a name="on_host_maintenance" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onHostMaintenance"></a>

```python
on_host_maintenance: str
```

- *Type:* str

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#on_host_maintenance ComputeInstanceTemplate#on_host_maintenance}

---

##### `on_instance_stop_action`<sup>Optional</sup> <a name="on_instance_stop_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onInstanceStopAction"></a>

```python
on_instance_stop_action: ComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#on_instance_stop_action ComputeInstanceTemplate#on_instance_stop_action}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#preemptible ComputeInstanceTemplate#preemptible}

---

##### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#provisioning_model ComputeInstanceTemplate#provisioning_model}

---

##### `termination_time`<sup>Optional</sup> <a name="termination_time" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.terminationTime"></a>

```python
termination_time: str
```

- *Type:* str

Specifies the timestamp, when the instance will be terminated, in RFC3339 text format.

If specified, the instance termination action
will be performed at the termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#termination_time ComputeInstanceTemplate#termination_time}

---

### ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#seconds ComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#nanos ComputeInstanceTemplate#nanos}

---

### ComputeInstanceTemplateSchedulingMaxRunDuration <a name="ComputeInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#seconds ComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#nanos ComputeInstanceTemplate#nanos}

---

### ComputeInstanceTemplateSchedulingNodeAffinities <a name="ComputeInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities(
  key: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#key ComputeInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#operator ComputeInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#values ComputeInstanceTemplate#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#key ComputeInstanceTemplate#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#operator ComputeInstanceTemplate#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#values ComputeInstanceTemplate#values}.

---

### ComputeInstanceTemplateSchedulingOnInstanceStopAction <a name="ComputeInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction(
  discard_local_ssd: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">discard_local_ssd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `discard_local_ssd`<sup>Optional</sup> <a name="discard_local_ssd" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```python
discard_local_ssd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#discard_local_ssd ComputeInstanceTemplate#discard_local_ssd}

---

### ComputeInstanceTemplateServiceAccount <a name="ComputeInstanceTemplateServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateServiceAccount(
  scopes: typing.List[str],
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.email">email</a></code> | <code>str</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#scopes ComputeInstanceTemplate#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#email ComputeInstanceTemplate#email}

---

### ComputeInstanceTemplateShieldedInstanceConfig <a name="ComputeInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_integrity_monitoring ComputeInstanceTemplate#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_secure_boot ComputeInstanceTemplate#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#enable_vtpm ComputeInstanceTemplate#enable_vtpm}

---

### ComputeInstanceTemplateTimeouts <a name="ComputeInstanceTemplateTimeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#create ComputeInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#delete ComputeInstanceTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#create ComputeInstanceTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#delete ComputeInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">reset_enable_nested_virtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">reset_enable_uefi_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">reset_performance_monitoring_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">reset_turbo_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">reset_visible_core_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_nested_virtualization` <a name="reset_enable_nested_virtualization" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```python
def reset_enable_nested_virtualization() -> None
```

##### `reset_enable_uefi_networking` <a name="reset_enable_uefi_networking" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```python
def reset_enable_uefi_networking() -> None
```

##### `reset_performance_monitoring_unit` <a name="reset_performance_monitoring_unit" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```python
def reset_performance_monitoring_unit() -> None
```

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```

##### `reset_turbo_mode` <a name="reset_turbo_mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```python
def reset_turbo_mode() -> None
```

##### `reset_visible_core_count` <a name="reset_visible_core_count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```python
def reset_visible_core_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enable_nested_virtualization_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">enable_uefi_networking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">performance_monitoring_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">turbo_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visible_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enable_uefi_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performance_monitoring_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">turbo_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visible_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_nested_virtualization_input`<sup>Optional</sup> <a name="enable_nested_virtualization_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```python
enable_nested_virtualization_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_uefi_networking_input`<sup>Optional</sup> <a name="enable_uefi_networking_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```python
enable_uefi_networking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_monitoring_unit_input`<sup>Optional</sup> <a name="performance_monitoring_unit_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```python
performance_monitoring_unit_input: str
```

- *Type:* str

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turbo_mode_input`<sup>Optional</sup> <a name="turbo_mode_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```python
turbo_mode_input: str
```

- *Type:* str

---

##### `visible_core_count_input`<sup>Optional</sup> <a name="visible_core_count_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```python
visible_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_uefi_networking`<sup>Required</sup> <a name="enable_uefi_networking" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```python
enable_uefi_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_monitoring_unit`<sup>Required</sup> <a name="performance_monitoring_unit" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```python
performance_monitoring_unit: str
```

- *Type:* str

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turbo_mode`<sup>Required</sup> <a name="turbo_mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```python
turbo_mode: str
```

- *Type:* str

---

##### `visible_core_count`<sup>Required</sup> <a name="visible_core_count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```python
visible_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

---


### ComputeInstanceTemplateConfidentialInstanceConfigOutputReference <a name="ComputeInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">reset_confidential_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">reset_enable_confidential_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidential_instance_type` <a name="reset_confidential_instance_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```python
def reset_confidential_instance_type() -> None
```

##### `reset_enable_confidential_compute` <a name="reset_enable_confidential_compute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```python
def reset_enable_confidential_compute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">confidential_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enable_confidential_compute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidential_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidential_instance_type_input`<sup>Optional</sup> <a name="confidential_instance_type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```python
confidential_instance_type_input: str
```

- *Type:* str

---

##### `enable_confidential_compute_input`<sup>Optional</sup> <a name="enable_confidential_compute_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```python
enable_confidential_compute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_instance_type`<sup>Required</sup> <a name="confidential_instance_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```python
confidential_instance_type: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

---


### ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a>

---


### ComputeInstanceTemplateDiskList <a name="ComputeInstanceTemplateDiskList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]]

---


### ComputeInstanceTemplateDiskOutputReference <a name="ComputeInstanceTemplateDiskOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey">put_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">put_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">put_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetAutoDelete">reset_auto_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetBoot">reset_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">reset_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskName">reset_disk_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedIops">reset_provisioned_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourcePolicies">reset_resource_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImage">reset_source_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">reset_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">reset_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disk_encryption_key` <a name="put_disk_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```python
def put_disk_encryption_key(
  kms_key_self_link: str
) -> None
```

###### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

##### `put_source_image_encryption_key` <a name="put_source_image_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```python
def put_source_image_encryption_key(
  kms_key_self_link: str,
  kms_key_service_account: str = None
) -> None
```

###### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_service_account ComputeInstanceTemplate#kms_key_service_account}

---

##### `put_source_snapshot_encryption_key` <a name="put_source_snapshot_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```python
def put_source_snapshot_encryption_key(
  kms_key_self_link: str,
  kms_key_service_account: str = None
) -> None
```

###### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#kms_key_service_account ComputeInstanceTemplate#kms_key_service_account}

---

##### `reset_auto_delete` <a name="reset_auto_delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```python
def reset_auto_delete() -> None
```

##### `reset_boot` <a name="reset_boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetBoot"></a>

```python
def reset_boot() -> None
```

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_disk_encryption_key` <a name="reset_disk_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```python
def reset_disk_encryption_key() -> None
```

##### `reset_disk_name` <a name="reset_disk_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskName"></a>

```python
def reset_disk_name() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_provisioned_iops` <a name="reset_provisioned_iops" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```python
def reset_provisioned_iops() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```

##### `reset_resource_policies` <a name="reset_resource_policies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```python
def reset_resource_policies() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_image` <a name="reset_source_image" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```python
def reset_source_image() -> None
```

##### `reset_source_image_encryption_key` <a name="reset_source_image_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```python
def reset_source_image_encryption_key() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```

##### `reset_source_snapshot_encryption_key` <a name="reset_source_snapshot_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```python
def reset_source_snapshot_encryption_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput">auto_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.bootInput">boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">disk_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskNameInput">disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput">provisioned_iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">resource_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">source_image_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageInput">source_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">source_snapshot_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```python
disk_encryption_key: ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `auto_delete_input`<sup>Optional</sup> <a name="auto_delete_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```python
auto_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot_input`<sup>Optional</sup> <a name="boot_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.bootInput"></a>

```python
boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `disk_encryption_key_input`<sup>Optional</sup> <a name="disk_encryption_key_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```python
disk_encryption_key_input: ComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `disk_name_input`<sup>Optional</sup> <a name="disk_name_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```python
disk_name_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `provisioned_iops_input`<sup>Optional</sup> <a name="provisioned_iops_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```python
provisioned_iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies_input`<sup>Optional</sup> <a name="resource_policies_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```python
resource_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_image_encryption_key_input`<sup>Optional</sup> <a name="source_image_encryption_key_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```python
source_image_encryption_key_input: ComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `source_image_input`<sup>Optional</sup> <a name="source_image_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```python
source_image_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key_input`<sup>Optional</sup> <a name="source_snapshot_encryption_key_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```python
source_snapshot_encryption_key_input: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>]

---


### ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### ComputeInstanceTemplateGuestAcceleratorList <a name="ComputeInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]]

---


### ComputeInstanceTemplateGuestAcceleratorOutputReference <a name="ComputeInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateGuestAccelerator]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>]

---


### ComputeInstanceTemplateNetworkInterfaceAccessConfigList <a name="ComputeInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

---


### ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">reset_nat_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">reset_network_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nat_ip` <a name="reset_nat_ip" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```python
def reset_nat_ip() -> None
```

##### `reset_network_tier` <a name="reset_network_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```python
def reset_network_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">nat_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">nat_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `nat_ip_input`<sup>Optional</sup> <a name="nat_ip_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```python
nat_ip_input: str
```

- *Type:* str

---

##### `network_tier_input`<sup>Optional</sup> <a name="network_tier_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```python
network_tier_input: str
```

- *Type:* str

---

##### `nat_ip`<sup>Required</sup> <a name="nat_ip" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```python
nat_ip: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateNetworkInterfaceAccessConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]

---


### ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

---


### ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">reset_subnetwork_range_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subnetwork_range_name` <a name="reset_subnetwork_range_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```python
def reset_subnetwork_range_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetwork_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `subnetwork_range_name_input`<sup>Optional</sup> <a name="subnetwork_range_name_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```python
subnetwork_range_name_input: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateNetworkInterfaceAliasIpRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]

---


### ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

---


### ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">external_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">external_ipv6_prefix_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_ipv6`<sup>Required</sup> <a name="external_ipv6" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```python
external_ipv6: str
```

- *Type:* str

---

##### `external_ipv6_prefix_length`<sup>Required</sup> <a name="external_ipv6_prefix_length" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```python
external_ipv6_prefix_length: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `network_tier_input`<sup>Optional</sup> <a name="network_tier_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```python
network_tier_input: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]

---


### ComputeInstanceTemplateNetworkInterfaceList <a name="ComputeInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]]

---


### ComputeInstanceTemplateNetworkInterfaceOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">put_alias_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">put_ipv6_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">reset_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">reset_alias_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">reset_internal_ipv6_prefix_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">reset_ipv6_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">reset_network_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">reset_queue_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType">reset_stack_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">reset_subnetwork_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```python
def put_access_config(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAccessConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

---

##### `put_alias_ip_range` <a name="put_alias_ip_range" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```python
def put_alias_ip_range(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

---

##### `put_ipv6_access_config` <a name="put_ipv6_access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```python
def put_ipv6_access_config(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

---

##### `reset_access_config` <a name="reset_access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```python
def reset_access_config() -> None
```

##### `reset_alias_ip_range` <a name="reset_alias_ip_range" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```python
def reset_alias_ip_range() -> None
```

##### `reset_internal_ipv6_prefix_length` <a name="reset_internal_ipv6_prefix_length" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```python
def reset_internal_ipv6_prefix_length() -> None
```

##### `reset_ipv6_access_config` <a name="reset_ipv6_access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```python
def reset_ipv6_access_config() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_ip` <a name="reset_network_ip" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```python
def reset_network_ip() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_queue_count` <a name="reset_queue_count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```python
def reset_queue_count() -> None
```

##### `reset_stack_type` <a name="reset_stack_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```python
def reset_stack_type() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_subnetwork_project` <a name="reset_subnetwork_project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```python
def reset_subnetwork_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList">ComputeInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">alias_ip_range</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6_access_config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">access_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">alias_ip_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internal_ipv6_prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6_access_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">network_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">queue_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetwork_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internal_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">network_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetwork_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```python
access_config: ComputeInstanceTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList">ComputeInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `alias_ip_range`<sup>Required</sup> <a name="alias_ip_range" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```python
alias_ip_range: ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6_access_config`<sup>Required</sup> <a name="ipv6_access_config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```python
ipv6_access_config: ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6_access_type`<sup>Required</sup> <a name="ipv6_access_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```python
ipv6_access_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```python
access_config_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

---

##### `alias_ip_range_input`<sup>Optional</sup> <a name="alias_ip_range_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```python
alias_ip_range_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

---

##### `internal_ipv6_prefix_length_input`<sup>Optional</sup> <a name="internal_ipv6_prefix_length_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```python
internal_ipv6_prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_access_config_input`<sup>Optional</sup> <a name="ipv6_access_config_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```python
ipv6_access_config_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_ip_input`<sup>Optional</sup> <a name="network_ip_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```python
network_ip_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `queue_count_input`<sup>Optional</sup> <a name="queue_count_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```python
queue_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_type_input`<sup>Optional</sup> <a name="stack_type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```python
stack_type_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `subnetwork_project_input`<sup>Optional</sup> <a name="subnetwork_project_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```python
subnetwork_project_input: str
```

- *Type:* str

---

##### `internal_ipv6_prefix_length`<sup>Required</sup> <a name="internal_ipv6_prefix_length" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```python
internal_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_ip`<sup>Required</sup> <a name="network_ip" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```python
network_ip: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `subnetwork_project`<sup>Required</sup> <a name="subnetwork_project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```python
subnetwork_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>]

---


### ComputeInstanceTemplateNetworkPerformanceConfigOutputReference <a name="ComputeInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">total_egress_bandwidth_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">total_egress_bandwidth_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_egress_bandwidth_tier_input`<sup>Optional</sup> <a name="total_egress_bandwidth_tier_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```python
total_egress_bandwidth_tier_input: str
```

- *Type:* str

---

##### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```python
total_egress_bandwidth_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

---


### ComputeInstanceTemplateReservationAffinityOutputReference <a name="ComputeInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">put_specific_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">reset_specific_reservation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_specific_reservation` <a name="put_specific_reservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```python
def put_specific_reservation(
  key: str,
  values: typing.List[str]
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.key"></a>

- *Type:* str

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#key ComputeInstanceTemplate#key}

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.values"></a>

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#values ComputeInstanceTemplate#values}

---

##### `reset_specific_reservation` <a name="reset_specific_reservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```python
def reset_specific_reservation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specific_reservation</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">specific_reservation_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specific_reservation`<sup>Required</sup> <a name="specific_reservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```python
specific_reservation: ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `specific_reservation_input`<sup>Optional</sup> <a name="specific_reservation_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```python
specific_reservation_input: ComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

---


### ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---


### ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

---


### ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]

---


### ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

---


### ComputeInstanceTemplateSchedulingNodeAffinitiesList <a name="ComputeInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingNodeAffinities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]

---


### ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateSchedulingNodeAffinities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]

---


### ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">reset_discard_local_ssd</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_discard_local_ssd` <a name="reset_discard_local_ssd" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```python
def reset_discard_local_ssd() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">discard_local_ssd_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discard_local_ssd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `discard_local_ssd_input`<sup>Optional</sup> <a name="discard_local_ssd_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```python
discard_local_ssd_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `discard_local_ssd`<sup>Required</sup> <a name="discard_local_ssd" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```python
discard_local_ssd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### ComputeInstanceTemplateSchedulingOutputReference <a name="ComputeInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">put_local_ssd_recovery_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration">put_max_run_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities">put_node_affinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction">put_on_instance_stop_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">reset_automatic_restart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">reset_instance_termination_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">reset_local_ssd_recovery_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration">reset_max_run_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">reset_min_node_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities">reset_node_affinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">reset_on_host_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction">reset_on_instance_stop_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetPreemptible">reset_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel">reset_provisioning_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetTerminationTime">reset_termination_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_local_ssd_recovery_timeout` <a name="put_local_ssd_recovery_timeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```python
def put_local_ssd_recovery_timeout(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

---

##### `put_max_run_duration` <a name="put_max_run_duration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```python
def put_max_run_duration(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#seconds ComputeInstanceTemplate#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#nanos ComputeInstanceTemplate#nanos}

---

##### `put_node_affinities` <a name="put_node_affinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```python
def put_node_affinities(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingNodeAffinities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]

---

##### `put_on_instance_stop_action` <a name="put_on_instance_stop_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```python
def put_on_instance_stop_action(
  discard_local_ssd: typing.Union[bool, IResolvable] = None
) -> None
```

###### `discard_local_ssd`<sup>Optional</sup> <a name="discard_local_ssd" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.discardLocalSsd"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_instance_template#discard_local_ssd ComputeInstanceTemplate#discard_local_ssd}

---

##### `reset_automatic_restart` <a name="reset_automatic_restart" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```python
def reset_automatic_restart() -> None
```

##### `reset_availability_domain` <a name="reset_availability_domain" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_instance_termination_action` <a name="reset_instance_termination_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```python
def reset_instance_termination_action() -> None
```

##### `reset_local_ssd_recovery_timeout` <a name="reset_local_ssd_recovery_timeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```python
def reset_local_ssd_recovery_timeout() -> None
```

##### `reset_max_run_duration` <a name="reset_max_run_duration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```python
def reset_max_run_duration() -> None
```

##### `reset_min_node_cpus` <a name="reset_min_node_cpus" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```python
def reset_min_node_cpus() -> None
```

##### `reset_node_affinities` <a name="reset_node_affinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```python
def reset_node_affinities() -> None
```

##### `reset_on_host_maintenance` <a name="reset_on_host_maintenance" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```python
def reset_on_host_maintenance() -> None
```

##### `reset_on_instance_stop_action` <a name="reset_on_instance_stop_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```python
def reset_on_instance_stop_action() -> None
```

##### `reset_preemptible` <a name="reset_preemptible" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```python
def reset_preemptible() -> None
```

##### `reset_provisioning_model` <a name="reset_provisioning_model" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```python
def reset_provisioning_model() -> None
```

##### `reset_termination_time` <a name="reset_termination_time" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetTerminationTime"></a>

```python
def reset_termination_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">local_ssd_recovery_timeout</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration">max_run_duration</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities">node_affinities</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList">ComputeInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">on_instance_stop_action</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">automatic_restart_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">instance_termination_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">local_ssd_recovery_timeout_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput">max_run_duration_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">min_node_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">node_affinities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">on_host_maintenance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput">on_instance_stop_action_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput">preemptible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">provisioning_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTimeInput">termination_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart">automatic_restart</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instance_termination_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus">min_node_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">on_host_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTime">termination_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd_recovery_timeout`<sup>Required</sup> <a name="local_ssd_recovery_timeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```python
local_ssd_recovery_timeout: ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `max_run_duration`<sup>Required</sup> <a name="max_run_duration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```python
max_run_duration: ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `node_affinities`<sup>Required</sup> <a name="node_affinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```python
node_affinities: ComputeInstanceTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList">ComputeInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `on_instance_stop_action`<sup>Required</sup> <a name="on_instance_stop_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```python
on_instance_stop_action: ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `automatic_restart_input`<sup>Optional</sup> <a name="automatic_restart_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```python
automatic_restart_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_termination_action_input`<sup>Optional</sup> <a name="instance_termination_action_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```python
instance_termination_action_input: str
```

- *Type:* str

---

##### `local_ssd_recovery_timeout_input`<sup>Optional</sup> <a name="local_ssd_recovery_timeout_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```python
local_ssd_recovery_timeout_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

---

##### `max_run_duration_input`<sup>Optional</sup> <a name="max_run_duration_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```python
max_run_duration_input: ComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `min_node_cpus_input`<sup>Optional</sup> <a name="min_node_cpus_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```python
min_node_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_affinities_input`<sup>Optional</sup> <a name="node_affinities_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```python
node_affinities_input: typing.Union[IResolvable, typing.List[ComputeInstanceTemplateSchedulingNodeAffinities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>]]

---

##### `on_host_maintenance_input`<sup>Optional</sup> <a name="on_host_maintenance_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```python
on_host_maintenance_input: str
```

- *Type:* str

---

##### `on_instance_stop_action_input`<sup>Optional</sup> <a name="on_instance_stop_action_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```python
on_instance_stop_action_input: ComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `preemptible_input`<sup>Optional</sup> <a name="preemptible_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```python
preemptible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_model_input`<sup>Optional</sup> <a name="provisioning_model_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```python
provisioning_model_input: str
```

- *Type:* str

---

##### `termination_time_input`<sup>Optional</sup> <a name="termination_time_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTimeInput"></a>

```python
termination_time_input: str
```

- *Type:* str

---

##### `automatic_restart`<sup>Required</sup> <a name="automatic_restart" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```python
automatic_restart: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```python
availability_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_termination_action`<sup>Required</sup> <a name="instance_termination_action" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```python
instance_termination_action: str
```

- *Type:* str

---

##### `min_node_cpus`<sup>Required</sup> <a name="min_node_cpus" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```python
min_node_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_host_maintenance`<sup>Required</sup> <a name="on_host_maintenance" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```python
on_host_maintenance: str
```

- *Type:* str

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `termination_time`<sup>Required</sup> <a name="termination_time" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTime"></a>

```python
termination_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

---


### ComputeInstanceTemplateServiceAccountOutputReference <a name="ComputeInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

---


### ComputeInstanceTemplateShieldedInstanceConfigOutputReference <a name="ComputeInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

---


### ComputeInstanceTemplateTimeoutsOutputReference <a name="ComputeInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_template

computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>]

---



