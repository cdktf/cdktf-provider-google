# `computeRegionInstanceTemplate` Submodule <a name="`computeRegionInstanceTemplate` Submodule" id="@cdktf/provider-google.computeRegionInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionInstanceTemplate <a name="ComputeRegionInstanceTemplate" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template google_compute_region_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplate;

ComputeRegionInstanceTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .disk(IResolvable)
    .disk(java.util.List<ComputeRegionInstanceTemplateDisk>)
    .machineType(java.lang.String)
//  .advancedMachineFeatures(ComputeRegionInstanceTemplateAdvancedMachineFeatures)
//  .canIpForward(java.lang.Boolean)
//  .canIpForward(IResolvable)
//  .confidentialInstanceConfig(ComputeRegionInstanceTemplateConfidentialInstanceConfig)
//  .description(java.lang.String)
//  .guestAccelerator(IResolvable)
//  .guestAccelerator(java.util.List<ComputeRegionInstanceTemplateGuestAccelerator>)
//  .id(java.lang.String)
//  .instanceDescription(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataStartupScript(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<ComputeRegionInstanceTemplateNetworkInterface>)
//  .networkPerformanceConfig(ComputeRegionInstanceTemplateNetworkPerformanceConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .reservationAffinity(ComputeRegionInstanceTemplateReservationAffinity)
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .scheduling(ComputeRegionInstanceTemplateScheduling)
//  .serviceAccount(ComputeRegionInstanceTemplateServiceAccount)
//  .shieldedInstanceConfig(ComputeRegionInstanceTemplateShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeRegionInstanceTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.guestAccelerator">guestAccelerator</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>></code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#id ComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.instanceDescription">instanceDescription</a></code> | <code>java.lang.String</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to instances created from this template, 				 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.disk"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#disk ComputeRegionInstanceTemplate#disk}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#machine_type ComputeRegionInstanceTemplate#machine_type}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#advanced_machine_features ComputeRegionInstanceTemplate#advanced_machine_features}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.canIpForward"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#can_ip_forward ComputeRegionInstanceTemplate#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.confidentialInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#confidential_instance_config ComputeRegionInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#description ComputeRegionInstanceTemplate#description}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.guestAccelerator"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>>

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#guest_accelerator ComputeRegionInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#id ComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDescription`<sup>Optional</sup> <a name="instanceDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.instanceDescription"></a>

- *Type:* java.lang.String

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#instance_description ComputeRegionInstanceTemplate#instance_description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to instances created from this template, 				 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.

Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#labels ComputeRegionInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#metadata ComputeRegionInstanceTemplate#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.metadataStartupScript"></a>

- *Type:* java.lang.String

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#metadata_startup_script ComputeRegionInstanceTemplate#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.minCpuPlatform"></a>

- *Type:* java.lang.String

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#min_cpu_platform ComputeRegionInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#name ComputeRegionInstanceTemplate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#name_prefix ComputeRegionInstanceTemplate#name_prefix}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network_interface ComputeRegionInstanceTemplate#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.networkPerformanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network_performance_config ComputeRegionInstanceTemplate#network_performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#project ComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#region ComputeRegionInstanceTemplate#region}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#reservation_affinity ComputeRegionInstanceTemplate#reservation_affinity}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.resourceManagerTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#resource_manager_tags ComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.resourcePolicies"></a>

- *Type:* java.util.List<java.lang.String>

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#resource_policies ComputeRegionInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#scheduling ComputeRegionInstanceTemplate#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#service_account ComputeRegionInstanceTemplate#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#shielded_instance_config ComputeRegionInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#tags ComputeRegionInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#timeouts ComputeRegionInstanceTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkPerformanceConfig">putNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetInstanceDescription">resetInstanceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadataStartupScript">resetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkPerformanceConfig">resetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putAdvancedMachineFeatures"></a>

```java
public void putAdvancedMachineFeatures(ComputeRegionInstanceTemplateAdvancedMachineFeatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putConfidentialInstanceConfig"></a>

```java
public void putConfidentialInstanceConfig(ComputeRegionInstanceTemplateConfidentialInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putDisk"></a>

```java
public void putDisk(IResolvable OR java.util.List<ComputeRegionInstanceTemplateDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>>

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putGuestAccelerator"></a>

```java
public void putGuestAccelerator(IResolvable OR java.util.List<ComputeRegionInstanceTemplateGuestAccelerator> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<ComputeRegionInstanceTemplateNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>>

---

##### `putNetworkPerformanceConfig` <a name="putNetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkPerformanceConfig"></a>

```java
public void putNetworkPerformanceConfig(ComputeRegionInstanceTemplateNetworkPerformanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putReservationAffinity"></a>

```java
public void putReservationAffinity(ComputeRegionInstanceTemplateReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putScheduling"></a>

```java
public void putScheduling(ComputeRegionInstanceTemplateScheduling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

---

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putServiceAccount"></a>

```java
public void putServiceAccount(ComputeRegionInstanceTemplateServiceAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(ComputeRegionInstanceTemplateShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionInstanceTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetAdvancedMachineFeatures"></a>

```java
public void resetAdvancedMachineFeatures()
```

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetCanIpForward"></a>

```java
public void resetCanIpForward()
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetConfidentialInstanceConfig"></a>

```java
public void resetConfidentialInstanceConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetGuestAccelerator"></a>

```java
public void resetGuestAccelerator()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceDescription` <a name="resetInstanceDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetInstanceDescription"></a>

```java
public void resetInstanceDescription()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataStartupScript` <a name="resetMetadataStartupScript" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadataStartupScript"></a>

```java
public void resetMetadataStartupScript()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetNetworkPerformanceConfig` <a name="resetNetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkPerformanceConfig"></a>

```java
public void resetNetworkPerformanceConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourcePolicies"></a>

```java
public void resetResourcePolicies()
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetScheduling"></a>

```java
public void resetScheduling()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplate;

ComputeRegionInstanceTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplate;

ComputeRegionInstanceTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplate;

ComputeRegionInstanceTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplate;

ComputeRegionInstanceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionInstanceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionInstanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList">ComputeRegionInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList">ComputeRegionInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataFingerprint">metadataFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList">ComputeRegionInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference">ComputeRegionInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference">ComputeRegionInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference">ComputeRegionInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsFingerprint">tagsFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference">ComputeRegionInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForwardInput">canIpForwardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.diskInput">diskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescriptionInput">instanceDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScriptInput">metadataStartupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfigInput">networkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescription">instanceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeatures"></a>

```java
public ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfig"></a>

```java
public ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.disk"></a>

```java
public ComputeRegionInstanceTemplateDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList">ComputeRegionInstanceTemplateDiskList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAccelerator"></a>

```java
public ComputeRegionInstanceTemplateGuestAcceleratorList getGuestAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList">ComputeRegionInstanceTemplateGuestAcceleratorList</a>

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataFingerprint"></a>

```java
public java.lang.String getMetadataFingerprint();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterface"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList">ComputeRegionInstanceTemplateNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfig"></a>

```java
public ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinity"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference">ComputeRegionInstanceTemplateReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.scheduling"></a>

```java
public ComputeRegionInstanceTemplateSchedulingOutputReference getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference">ComputeRegionInstanceTemplateSchedulingOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccount"></a>

```java
public ComputeRegionInstanceTemplateServiceAccountOutputReference getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference">ComputeRegionInstanceTemplateServiceAccountOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfig"></a>

```java
public ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsFingerprint"></a>

```java
public java.lang.String getTagsFingerprint();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeouts"></a>

```java
public ComputeRegionInstanceTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference">ComputeRegionInstanceTemplateTimeoutsOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```java
public ComputeRegionInstanceTemplateAdvancedMachineFeatures getAdvancedMachineFeaturesInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForwardInput"></a>

```java
public java.lang.Object getCanIpForwardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```java
public ComputeRegionInstanceTemplateConfidentialInstanceConfig getConfidentialInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.diskInput"></a>

```java
public java.lang.Object getDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>>

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAcceleratorInput"></a>

```java
public java.lang.Object getGuestAcceleratorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceDescriptionInput`<sup>Optional</sup> <a name="instanceDescriptionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescriptionInput"></a>

```java
public java.lang.String getInstanceDescriptionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataStartupScriptInput`<sup>Optional</sup> <a name="metadataStartupScriptInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScriptInput"></a>

```java
public java.lang.String getMetadataStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>>

---

##### `networkPerformanceConfigInput`<sup>Optional</sup> <a name="networkPerformanceConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfigInput"></a>

```java
public ComputeRegionInstanceTemplateNetworkPerformanceConfig getNetworkPerformanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinityInput"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePoliciesInput"></a>

```java
public java.util.List<java.lang.String> getResourcePoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.schedulingInput"></a>

```java
public ComputeRegionInstanceTemplateScheduling getSchedulingInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccountInput"></a>

```java
public ComputeRegionInstanceTemplateServiceAccount getServiceAccountInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```java
public ComputeRegionInstanceTemplateShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a>

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForward"></a>

```java
public java.lang.Object getCanIpForward();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceDescription`<sup>Required</sup> <a name="instanceDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescription"></a>

```java
public java.lang.String getInstanceDescription();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionInstanceTemplateAdvancedMachineFeatures <a name="ComputeRegionInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateAdvancedMachineFeatures;

ComputeRegionInstanceTemplateAdvancedMachineFeatures.builder()
//  .enableNestedVirtualization(java.lang.Boolean)
//  .enableNestedVirtualization(IResolvable)
//  .threadsPerCore(java.lang.Number)
//  .visibleCoreCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | The number of physical cores to expose to an instance. |

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```java
public java.lang.Object getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#enable_nested_virtualization ComputeRegionInstanceTemplate#enable_nested_virtualization}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#threads_per_core ComputeRegionInstanceTemplate#threads_per_core}

---

##### `visibleCoreCount`<sup>Optional</sup> <a name="visibleCoreCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#visible_core_count ComputeRegionInstanceTemplate#visible_core_count}

---

### ComputeRegionInstanceTemplateConfidentialInstanceConfig <a name="ComputeRegionInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateConfidentialInstanceConfig;

ComputeRegionInstanceTemplateConfidentialInstanceConfig.builder()
    .enableConfidentialCompute(java.lang.Boolean)
    .enableConfidentialCompute(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance should have confidential compute enabled. |

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```java
public java.lang.Object getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance should have confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#enable_confidential_compute ComputeRegionInstanceTemplate#enable_confidential_compute}

---

### ComputeRegionInstanceTemplateConfig <a name="ComputeRegionInstanceTemplateConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateConfig;

ComputeRegionInstanceTemplateConfig.builder()
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
    .disk(IResolvable)
    .disk(java.util.List<ComputeRegionInstanceTemplateDisk>)
    .machineType(java.lang.String)
//  .advancedMachineFeatures(ComputeRegionInstanceTemplateAdvancedMachineFeatures)
//  .canIpForward(java.lang.Boolean)
//  .canIpForward(IResolvable)
//  .confidentialInstanceConfig(ComputeRegionInstanceTemplateConfidentialInstanceConfig)
//  .description(java.lang.String)
//  .guestAccelerator(IResolvable)
//  .guestAccelerator(java.util.List<ComputeRegionInstanceTemplateGuestAccelerator>)
//  .id(java.lang.String)
//  .instanceDescription(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataStartupScript(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<ComputeRegionInstanceTemplateNetworkInterface>)
//  .networkPerformanceConfig(ComputeRegionInstanceTemplateNetworkPerformanceConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .reservationAffinity(ComputeRegionInstanceTemplateReservationAffinity)
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .scheduling(ComputeRegionInstanceTemplateScheduling)
//  .serviceAccount(ComputeRegionInstanceTemplateServiceAccount)
//  .shieldedInstanceConfig(ComputeRegionInstanceTemplateShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeRegionInstanceTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>></code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#id ComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.instanceDescription">instanceDescription</a></code> | <code>java.lang.String</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to instances created from this template, 				 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.disk"></a>

```java
public java.lang.Object getDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#disk ComputeRegionInstanceTemplate#disk}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#machine_type ComputeRegionInstanceTemplate#machine_type}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```java
public ComputeRegionInstanceTemplateAdvancedMachineFeatures getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#advanced_machine_features ComputeRegionInstanceTemplate#advanced_machine_features}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.canIpForward"></a>

```java
public java.lang.Object getCanIpForward();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#can_ip_forward ComputeRegionInstanceTemplate#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```java
public ComputeRegionInstanceTemplateConfidentialInstanceConfig getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#confidential_instance_config ComputeRegionInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#description ComputeRegionInstanceTemplate#description}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.guestAccelerator"></a>

```java
public java.lang.Object getGuestAccelerator();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>>

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#guest_accelerator ComputeRegionInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#id ComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDescription`<sup>Optional</sup> <a name="instanceDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.instanceDescription"></a>

```java
public java.lang.String getInstanceDescription();
```

- *Type:* java.lang.String

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#instance_description ComputeRegionInstanceTemplate#instance_description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to instances created from this template, 				 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.

Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#labels ComputeRegionInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#metadata ComputeRegionInstanceTemplate#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#metadata_startup_script ComputeRegionInstanceTemplate#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#min_cpu_platform ComputeRegionInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#name ComputeRegionInstanceTemplate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#name_prefix ComputeRegionInstanceTemplate#name_prefix}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network_interface ComputeRegionInstanceTemplate#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```java
public ComputeRegionInstanceTemplateNetworkPerformanceConfig getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network_performance_config ComputeRegionInstanceTemplate#network_performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#project ComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#region ComputeRegionInstanceTemplate#region}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.reservationAffinity"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#reservation_affinity ComputeRegionInstanceTemplate#reservation_affinity}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#resource_manager_tags ComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#resource_policies ComputeRegionInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.scheduling"></a>

```java
public ComputeRegionInstanceTemplateScheduling getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#scheduling ComputeRegionInstanceTemplate#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.serviceAccount"></a>

```java
public ComputeRegionInstanceTemplateServiceAccount getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#service_account ComputeRegionInstanceTemplate#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```java
public ComputeRegionInstanceTemplateShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#shielded_instance_config ComputeRegionInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#tags ComputeRegionInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.timeouts"></a>

```java
public ComputeRegionInstanceTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#timeouts ComputeRegionInstanceTemplate#timeouts}

---

### ComputeRegionInstanceTemplateDisk <a name="ComputeRegionInstanceTemplateDisk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDisk;

ComputeRegionInstanceTemplateDisk.builder()
//  .autoDelete(java.lang.Boolean)
//  .autoDelete(IResolvable)
//  .boot(java.lang.Boolean)
//  .boot(IResolvable)
//  .deviceName(java.lang.String)
//  .diskEncryptionKey(ComputeRegionInstanceTemplateDiskDiskEncryptionKey)
//  .diskName(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .diskType(java.lang.String)
//  .interface(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mode(java.lang.String)
//  .provisionedIops(java.lang.Number)
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .source(java.lang.String)
//  .sourceImage(java.lang.String)
//  .sourceImageEncryptionKey(ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey)
//  .sourceSnapshot(java.lang.String)
//  .sourceSnapshotEncryptionKey(ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.autoDelete">autoDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.boot">boot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskName">diskName</a></code> | <code>java.lang.String</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskType">diskType</a></code> | <code>java.lang.String</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.interface">interface</a></code> | <code>java.lang.String</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.source">source</a></code> | <code>java.lang.String</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.type">type</a></code> | <code>java.lang.String</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.autoDelete"></a>

```java
public java.lang.Object getAutoDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#auto_delete ComputeRegionInstanceTemplate#auto_delete}

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.boot"></a>

```java
public java.lang.Object getBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#boot ComputeRegionInstanceTemplate#boot}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#device_name ComputeRegionInstanceTemplate#device_name}

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskEncryptionKey"></a>

```java
public ComputeRegionInstanceTemplateDiskDiskEncryptionKey getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#disk_encryption_key ComputeRegionInstanceTemplate#disk_encryption_key}

---

##### `diskName`<sup>Optional</sup> <a name="diskName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#disk_name ComputeRegionInstanceTemplate#disk_name}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#disk_size_gb ComputeRegionInstanceTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#disk_type ComputeRegionInstanceTemplate#disk_type}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#interface ComputeRegionInstanceTemplate#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#labels ComputeRegionInstanceTemplate#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#mode ComputeRegionInstanceTemplate#mode}

---

##### `provisionedIops`<sup>Optional</sup> <a name="provisionedIops" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#provisioned_iops ComputeRegionInstanceTemplate#provisioned_iops}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#resource_manager_tags ComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#resource_policies ComputeRegionInstanceTemplate#resource_policies}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#source ComputeRegionInstanceTemplate#source}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#source_image ComputeRegionInstanceTemplate#source_image}

---

##### `sourceImageEncryptionKey`<sup>Optional</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#source_image_encryption_key ComputeRegionInstanceTemplate#source_image_encryption_key}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#source_snapshot ComputeRegionInstanceTemplate#source_snapshot}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#source_snapshot_encryption_key ComputeRegionInstanceTemplate#source_snapshot_encryption_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}

---

### ComputeRegionInstanceTemplateDiskDiskEncryptionKey <a name="ComputeRegionInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskDiskEncryptionKey;

ComputeRegionInstanceTemplateDiskDiskEncryptionKey.builder()
    .kmsKeySelfLink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}

---

### ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey <a name="ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey;

ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.builder()
    .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#kms_key_service_account ComputeRegionInstanceTemplate#kms_key_service_account}

---

### ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey;

ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.builder()
    .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#kms_key_service_account ComputeRegionInstanceTemplate#kms_key_service_account}

---

### ComputeRegionInstanceTemplateGuestAccelerator <a name="ComputeRegionInstanceTemplateGuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateGuestAccelerator;

ComputeRegionInstanceTemplateGuestAccelerator.builder()
    .count(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.count">count</a></code> | <code>java.lang.Number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.type">type</a></code> | <code>java.lang.String</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#count ComputeRegionInstanceTemplate#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}

---

### ComputeRegionInstanceTemplateNetworkInterface <a name="ComputeRegionInstanceTemplateNetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterface;

ComputeRegionInstanceTemplateNetworkInterface.builder()
//  .accessConfig(IResolvable)
//  .accessConfig(java.util.List<ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig>)
//  .aliasIpRange(IResolvable)
//  .aliasIpRange(java.util.List<ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange>)
//  .internalIpv6PrefixLength(java.lang.Number)
//  .ipv6AccessConfig(IResolvable)
//  .ipv6AccessConfig(java.util.List<ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig>)
//  .ipv6Address(java.lang.String)
//  .network(java.lang.String)
//  .networkIp(java.lang.String)
//  .nicType(java.lang.String)
//  .queueCount(java.lang.Number)
//  .stackType(java.lang.String)
//  .subnetwork(java.lang.String)
//  .subnetworkProject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.accessConfig">accessConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>></code> | access_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange">aliasIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>></code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>></code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.network">network</a></code> | <code>java.lang.String</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.nicType">nicType</a></code> | <code>java.lang.String</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | The ID of the project in which the subnetwork belongs. |

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.accessConfig"></a>

```java
public java.lang.Object getAccessConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#access_config ComputeRegionInstanceTemplate#access_config}

---

##### `aliasIpRange`<sup>Optional</sup> <a name="aliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```java
public java.lang.Object getAliasIpRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#alias_ip_range ComputeRegionInstanceTemplate#alias_ip_range}

---

##### `internalIpv6PrefixLength`<sup>Optional</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#internal_ipv6_prefix_length ComputeRegionInstanceTemplate#internal_ipv6_prefix_length}

---

##### `ipv6AccessConfig`<sup>Optional</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```java
public java.lang.Object getIpv6AccessConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#ipv6_access_config ComputeRegionInstanceTemplate#ipv6_access_config}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#ipv6_address ComputeRegionInstanceTemplate#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network ComputeRegionInstanceTemplate#network}

---

##### `networkIp`<sup>Optional</sup> <a name="networkIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network_ip ComputeRegionInstanceTemplate#network_ip}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#nic_type ComputeRegionInstanceTemplate#nic_type}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#queue_count ComputeRegionInstanceTemplate#queue_count}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#stack_type ComputeRegionInstanceTemplate#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#subnetwork ComputeRegionInstanceTemplate#subnetwork}

---

##### `subnetworkProject`<sup>Optional</sup> <a name="subnetworkProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#subnetwork_project ComputeRegionInstanceTemplate#subnetwork_project}

---

### ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig <a name="ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig;

ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.builder()
//  .natIp(java.lang.String)
//  .networkTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">natIp</a></code> | <code>java.lang.String</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The networking tier used for configuring this instance template. |

---

##### `natIp`<sup>Optional</sup> <a name="natIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#nat_ip ComputeRegionInstanceTemplate#nat_ip}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network_tier ComputeRegionInstanceTemplate#network_tier}

---

### ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange <a name="ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange;

ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.builder()
    .ipCidrRange(java.lang.String)
//  .subnetworkRangeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#ip_cidr_range ComputeRegionInstanceTemplate#ip_cidr_range}

---

##### `subnetworkRangeName`<sup>Optional</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#subnetwork_range_name ComputeRegionInstanceTemplate#subnetwork_range_name}

---

### ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig;

ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.builder()
    .networkTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#network_tier ComputeRegionInstanceTemplate#network_tier}

---

### ComputeRegionInstanceTemplateNetworkPerformanceConfig <a name="ComputeRegionInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkPerformanceConfig;

ComputeRegionInstanceTemplateNetworkPerformanceConfig.builder()
    .totalEgressBandwidthTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#total_egress_bandwidth_tier ComputeRegionInstanceTemplate#total_egress_bandwidth_tier}

---

### ComputeRegionInstanceTemplateReservationAffinity <a name="ComputeRegionInstanceTemplateReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateReservationAffinity;

ComputeRegionInstanceTemplateReservationAffinity.builder()
    .type(java.lang.String)
//  .specificReservation(ComputeRegionInstanceTemplateReservationAffinitySpecificReservation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.type">type</a></code> | <code>java.lang.String</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}

---

##### `specificReservation`<sup>Optional</sup> <a name="specificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.specificReservation"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinitySpecificReservation getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#specific_reservation ComputeRegionInstanceTemplate#specific_reservation}

---

### ComputeRegionInstanceTemplateReservationAffinitySpecificReservation <a name="ComputeRegionInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation;

ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key">key</a></code> | <code>java.lang.String</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}

---

### ComputeRegionInstanceTemplateScheduling <a name="ComputeRegionInstanceTemplateScheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateScheduling;

ComputeRegionInstanceTemplateScheduling.builder()
//  .automaticRestart(java.lang.Boolean)
//  .automaticRestart(IResolvable)
//  .instanceTerminationAction(java.lang.String)
//  .localSsdRecoveryTimeout(IResolvable)
//  .localSsdRecoveryTimeout(java.util.List<ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout>)
//  .minNodeCpus(java.lang.Number)
//  .nodeAffinities(IResolvable)
//  .nodeAffinities(java.util.List<ComputeRegionInstanceTemplateSchedulingNodeAffinities>)
//  .onHostMaintenance(java.lang.String)
//  .preemptible(java.lang.Boolean)
//  .preemptible(IResolvable)
//  .provisioningModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.automaticRestart">automaticRestart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.nodeAffinities">nodeAffinities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>></code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `automaticRestart`<sup>Optional</sup> <a name="automaticRestart" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.automaticRestart"></a>

```java
public java.lang.Object getAutomaticRestart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#automatic_restart ComputeRegionInstanceTemplate#automatic_restart}

---

##### `instanceTerminationAction`<sup>Optional</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#instance_termination_action ComputeRegionInstanceTemplate#instance_termination_action}

---

##### `localSsdRecoveryTimeout`<sup>Optional</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```java
public java.lang.Object getLocalSsdRecoveryTimeout();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#local_ssd_recovery_timeout ComputeRegionInstanceTemplate#local_ssd_recovery_timeout}

---

##### `minNodeCpus`<sup>Optional</sup> <a name="minNodeCpus" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#min_node_cpus ComputeRegionInstanceTemplate#min_node_cpus}

---

##### `nodeAffinities`<sup>Optional</sup> <a name="nodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.nodeAffinities"></a>

```java
public java.lang.Object getNodeAffinities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#node_affinities ComputeRegionInstanceTemplate#node_affinities}

---

##### `onHostMaintenance`<sup>Optional</sup> <a name="onHostMaintenance" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#on_host_maintenance ComputeRegionInstanceTemplate#on_host_maintenance}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#preemptible ComputeRegionInstanceTemplate#preemptible}

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#provisioning_model ComputeRegionInstanceTemplate#provisioning_model}

---

### ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout;

ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#seconds ComputeRegionInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#nanos ComputeRegionInstanceTemplate#nanos}

---

### ComputeRegionInstanceTemplateSchedulingNodeAffinities <a name="ComputeRegionInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateSchedulingNodeAffinities;

ComputeRegionInstanceTemplateSchedulingNodeAffinities.builder()
    .key(java.lang.String)
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#operator ComputeRegionInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#operator ComputeRegionInstanceTemplate#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}.

---

### ComputeRegionInstanceTemplateServiceAccount <a name="ComputeRegionInstanceTemplateServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateServiceAccount;

ComputeRegionInstanceTemplateServiceAccount.builder()
    .scopes(java.util.List<java.lang.String>)
//  .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.email">email</a></code> | <code>java.lang.String</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#scopes ComputeRegionInstanceTemplate#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#email ComputeRegionInstanceTemplate#email}

---

### ComputeRegionInstanceTemplateShieldedInstanceConfig <a name="ComputeRegionInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateShieldedInstanceConfig;

ComputeRegionInstanceTemplateShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
//  .enableVtpm(java.lang.Boolean)
//  .enableVtpm(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#enable_integrity_monitoring ComputeRegionInstanceTemplate#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#enable_secure_boot ComputeRegionInstanceTemplate#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#enable_vtpm ComputeRegionInstanceTemplate#enable_vtpm}

---

### ComputeRegionInstanceTemplateTimeouts <a name="ComputeRegionInstanceTemplateTimeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateTimeouts;

ComputeRegionInstanceTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#create ComputeRegionInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#delete ComputeRegionInstanceTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#create ComputeRegionInstanceTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_instance_template#delete ComputeRegionInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference;

new ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">resetVisibleCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```java
public void resetEnableNestedVirtualization()
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```java
public void resetThreadsPerCore()
```

##### `resetVisibleCoreCount` <a name="resetVisibleCoreCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```java
public void resetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visibleCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```java
public java.lang.Object getEnableNestedVirtualizationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `visibleCoreCountInput`<sup>Optional</sup> <a name="visibleCoreCountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```java
public java.lang.Number getVisibleCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```java
public java.lang.Object getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---


### ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference <a name="ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference;

new ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```java
public java.lang.Object getEnableConfidentialComputeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```java
public java.lang.Object getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateConfidentialInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---


### ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference;

new ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateDiskDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---


### ComputeRegionInstanceTemplateDiskList <a name="ComputeRegionInstanceTemplateDiskList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskList;

new ComputeRegionInstanceTemplateDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.get"></a>

```java
public ComputeRegionInstanceTemplateDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>>

---


### ComputeRegionInstanceTemplateDiskOutputReference <a name="ComputeRegionInstanceTemplateDiskOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskOutputReference;

new ComputeRegionInstanceTemplateDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey">putDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">putSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">putSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetBoot">resetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">resetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskName">resetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops">resetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">resetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">resetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskEncryptionKey` <a name="putDiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```java
public void putDiskEncryptionKey(ComputeRegionInstanceTemplateDiskDiskEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `putSourceImageEncryptionKey` <a name="putSourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```java
public void putSourceImageEncryptionKey(ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `putSourceSnapshotEncryptionKey` <a name="putSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```java
public void putSourceSnapshotEncryptionKey(ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```java
public void resetAutoDelete()
```

##### `resetBoot` <a name="resetBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetBoot"></a>

```java
public void resetBoot()
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetDiskEncryptionKey` <a name="resetDiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```java
public void resetDiskEncryptionKey()
```

##### `resetDiskName` <a name="resetDiskName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskName"></a>

```java
public void resetDiskName()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetInterface"></a>

```java
public void resetInterface()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetProvisionedIops` <a name="resetProvisionedIops" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```java
public void resetProvisionedIops()
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```java
public void resetResourcePolicies()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```java
public void resetSourceImage()
```

##### `resetSourceImageEncryptionKey` <a name="resetSourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```java
public void resetSourceImageEncryptionKey()
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```java
public void resetSourceSnapshot()
```

##### `resetSourceSnapshotEncryptionKey` <a name="resetSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```java
public void resetSourceSnapshotEncryptionKey()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.bootInput">bootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">diskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput">provisionedIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">sourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">sourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskName">diskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```java
public ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```java
public java.lang.Object getAutoDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootInput`<sup>Optional</sup> <a name="bootInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.bootInput"></a>

```java
public java.lang.Object getBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyInput`<sup>Optional</sup> <a name="diskEncryptionKeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```java
public ComputeRegionInstanceTemplateDiskDiskEncryptionKey getDiskEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```java
public java.lang.String getDiskNameInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `provisionedIopsInput`<sup>Optional</sup> <a name="provisionedIopsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```java
public java.lang.Number getProvisionedIopsInput();
```

- *Type:* java.lang.Number

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```java
public java.util.List<java.lang.String> getResourcePoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="sourceImageEncryptionKeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey getSourceImageEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```java
public java.lang.String getSourceImageInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```java
public java.lang.String getSourceSnapshotInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```java
public java.lang.Object getAutoDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.boot"></a>

```java
public java.lang.Object getBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk">ComputeRegionInstanceTemplateDisk</a>

---


### ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference;

new ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference;

new ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### ComputeRegionInstanceTemplateGuestAcceleratorList <a name="ComputeRegionInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateGuestAcceleratorList;

new ComputeRegionInstanceTemplateGuestAcceleratorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.get"></a>

```java
public ComputeRegionInstanceTemplateGuestAcceleratorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>>

---


### ComputeRegionInstanceTemplateGuestAcceleratorOutputReference <a name="ComputeRegionInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference;

new ComputeRegionInstanceTemplateGuestAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator">ComputeRegionInstanceTemplateGuestAccelerator</a>

---


### ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList <a name="ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList;

new ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

---


### ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference;

new ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">resetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNatIp` <a name="resetNatIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```java
public void resetNatIp()
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```java
public void resetNetworkTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">natIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `natIpInput`<sup>Optional</sup> <a name="natIpInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```java
public java.lang.String getNatIpInput();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList;

new ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

---


### ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference;

new ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">resetSubnetworkRangeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetworkRangeName` <a name="resetSubnetworkRangeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```java
public void resetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```java
public java.lang.String getSubnetworkRangeNameInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList;

new ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

---


### ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference;

new ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```java
public java.lang.String getExternalIpv6();
```

- *Type:* java.lang.String

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```java
public java.lang.String getExternalIpv6PrefixLength();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### ComputeRegionInstanceTemplateNetworkInterfaceList <a name="ComputeRegionInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceList;

new ComputeRegionInstanceTemplateNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.get"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>>

---


### ComputeRegionInstanceTemplateNetworkInterfaceOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference;

new ComputeRegionInstanceTemplateNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">putAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">putIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">resetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">resetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">resetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">resetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">resetSubnetworkProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```java
public void putAccessConfig(IResolvable OR java.util.List<ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

---

##### `putAliasIpRange` <a name="putAliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```java
public void putAliasIpRange(IResolvable OR java.util.List<ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

---

##### `putIpv6AccessConfig` <a name="putIpv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```java
public void putIpv6AccessConfig(IResolvable OR java.util.List<ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```java
public void resetAccessConfig()
```

##### `resetAliasIpRange` <a name="resetAliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```java
public void resetAliasIpRange()
```

##### `resetInternalIpv6PrefixLength` <a name="resetInternalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```java
public void resetInternalIpv6PrefixLength()
```

##### `resetIpv6AccessConfig` <a name="resetIpv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```java
public void resetIpv6AccessConfig()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkIp` <a name="resetNetworkIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```java
public void resetNetworkIp()
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```java
public void resetNicType()
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```java
public void resetQueueCount()
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetSubnetworkProject` <a name="resetSubnetworkProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```java
public void resetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">aliasIpRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internalIpv6PrefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6AccessConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">networkIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetworkProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList getAliasIpRange();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```java
public ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList getIpv6AccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```java
public java.lang.Object getAccessConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

---

##### `aliasIpRangeInput`<sup>Optional</sup> <a name="aliasIpRangeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```java
public java.lang.Object getAliasIpRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

---

##### `internalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="internalIpv6PrefixLengthInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```java
public java.lang.Number getInternalIpv6PrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AccessConfigInput`<sup>Optional</sup> <a name="ipv6AccessConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```java
public java.lang.Object getIpv6AccessConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `networkIpInput`<sup>Optional</sup> <a name="networkIpInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```java
public java.lang.String getNetworkIpInput();
```

- *Type:* java.lang.String

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```java
public java.lang.String getNicTypeInput();
```

- *Type:* java.lang.String

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```java
public java.lang.Number getQueueCountInput();
```

- *Type:* java.lang.Number

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkProjectInput`<sup>Optional</sup> <a name="subnetworkProjectInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```java
public java.lang.String getSubnetworkProjectInput();
```

- *Type:* java.lang.String

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface">ComputeRegionInstanceTemplateNetworkInterface</a>

---


### ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference <a name="ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference;

new ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">totalEgressBandwidthTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTierInput`<sup>Optional</sup> <a name="totalEgressBandwidthTierInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```java
public java.lang.String getTotalEgressBandwidthTierInput();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateNetworkPerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---


### ComputeRegionInstanceTemplateReservationAffinityOutputReference <a name="ComputeRegionInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateReservationAffinityOutputReference;

new ComputeRegionInstanceTemplateReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">putSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">resetSpecificReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecificReservation` <a name="putSpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```java
public void putSpecificReservation(ComputeRegionInstanceTemplateReservationAffinitySpecificReservation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `resetSpecificReservation` <a name="resetSpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```java
public void resetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">specificReservationInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `specificReservationInput`<sup>Optional</sup> <a name="specificReservationInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinitySpecificReservation getSpecificReservationInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

---


### ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference;

new ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateReservationAffinitySpecificReservation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---


### ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList;

new ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```java
public ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

---


### ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference;

new ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList <a name="ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList;

new ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```java
public ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

---


### ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference;

new ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>

---


### ComputeRegionInstanceTemplateSchedulingOutputReference <a name="ComputeRegionInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateSchedulingOutputReference;

new ComputeRegionInstanceTemplateSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">putLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities">putNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">resetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">resetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">resetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">resetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities">resetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">resetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalSsdRecoveryTimeout` <a name="putLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```java
public void putLocalSsdRecoveryTimeout(IResolvable OR java.util.List<ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

---

##### `putNodeAffinities` <a name="putNodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```java
public void putNodeAffinities(IResolvable OR java.util.List<ComputeRegionInstanceTemplateSchedulingNodeAffinities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

---

##### `resetAutomaticRestart` <a name="resetAutomaticRestart" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```java
public void resetAutomaticRestart()
```

##### `resetInstanceTerminationAction` <a name="resetInstanceTerminationAction" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```java
public void resetInstanceTerminationAction()
```

##### `resetLocalSsdRecoveryTimeout` <a name="resetLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```java
public void resetLocalSsdRecoveryTimeout()
```

##### `resetMinNodeCpus` <a name="resetMinNodeCpus" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```java
public void resetMinNodeCpus()
```

##### `resetNodeAffinities` <a name="resetNodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```java
public void resetNodeAffinities()
```

##### `resetOnHostMaintenance` <a name="resetOnHostMaintenance" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```java
public void resetOnHostMaintenance()
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```java
public void resetPreemptible()
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```java
public void resetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">automaticRestartInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">instanceTerminationActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">localSsdRecoveryTimeoutInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">minNodeCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">nodeAffinitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">onHostMaintenanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```java
public ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList getLocalSsdRecoveryTimeout();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```java
public ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList getNodeAffinities();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `automaticRestartInput`<sup>Optional</sup> <a name="automaticRestartInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```java
public java.lang.Object getAutomaticRestartInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceTerminationActionInput`<sup>Optional</sup> <a name="instanceTerminationActionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```java
public java.lang.String getInstanceTerminationActionInput();
```

- *Type:* java.lang.String

---

##### `localSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="localSsdRecoveryTimeoutInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```java
public java.lang.Object getLocalSsdRecoveryTimeoutInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

---

##### `minNodeCpusInput`<sup>Optional</sup> <a name="minNodeCpusInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```java
public java.lang.Number getMinNodeCpusInput();
```

- *Type:* java.lang.Number

---

##### `nodeAffinitiesInput`<sup>Optional</sup> <a name="nodeAffinitiesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```java
public java.lang.Object getNodeAffinitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities">ComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

---

##### `onHostMaintenanceInput`<sup>Optional</sup> <a name="onHostMaintenanceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```java
public java.lang.String getOnHostMaintenanceInput();
```

- *Type:* java.lang.String

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```java
public java.lang.Object getPreemptibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```java
public java.lang.String getProvisioningModelInput();
```

- *Type:* java.lang.String

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```java
public java.lang.Object getAutomaticRestart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

---


### ComputeRegionInstanceTemplateServiceAccountOutputReference <a name="ComputeRegionInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateServiceAccountOutputReference;

new ComputeRegionInstanceTemplateServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```java
public void resetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

---


### ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference <a name="ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference;

new ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Object getEnableVtpmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public ComputeRegionInstanceTemplateShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---


### ComputeRegionInstanceTemplateTimeoutsOutputReference <a name="ComputeRegionInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_instance_template.ComputeRegionInstanceTemplateTimeoutsOutputReference;

new ComputeRegionInstanceTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a>

---



