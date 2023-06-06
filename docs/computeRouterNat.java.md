# `google_compute_router_nat`

Refer to the Terraform Registory for docs: [`google_compute_router_nat`](https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat).

# `computeRouterNat` Submodule <a name="`computeRouterNat` Submodule" id="@cdktf/provider-google.computeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterNat <a name="ComputeRouterNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNat;

ComputeRouterNat.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .natIpAllocateOption(java.lang.String)
    .router(java.lang.String)
    .sourceSubnetworkIpRangesToNat(java.lang.String)
//  .drainNatIps(java.util.List<java.lang.String>)
//  .enableDynamicPortAllocation(java.lang.Boolean)
//  .enableDynamicPortAllocation(IResolvable)
//  .enableEndpointIndependentMapping(java.lang.Boolean)
//  .enableEndpointIndependentMapping(IResolvable)
//  .icmpIdleTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .logConfig(ComputeRouterNatLogConfig)
//  .maxPortsPerVm(java.lang.Number)
//  .minPortsPerVm(java.lang.Number)
//  .natIps(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<ComputeRouterNatRules>)
//  .subnetwork(IResolvable)
//  .subnetwork(java.util.List<ComputeRouterNatSubnetwork>)
//  .tcpEstablishedIdleTimeoutSec(java.lang.Number)
//  .tcpTimeWaitTimeoutSec(java.lang.Number)
//  .tcpTransitoryIdleTimeoutSec(java.lang.Number)
//  .timeouts(ComputeRouterNatTimeouts)
//  .udpIdleTimeoutSec(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIpAllocateOption">natIpAllocateOption</a></code> | <code>java.lang.String</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>java.lang.String</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.drainNatIps">drainNatIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableDynamicPortAllocation">enableDynamicPortAllocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.maxPortsPerVm">maxPortsPerVm</a></code> | <code>java.lang.Number</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.minPortsPerVm">minPortsPerVm</a></code> | <code>java.lang.Number</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>></code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTimeWaitTimeoutSec">tcpTimeWaitTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `natIpAllocateOption`<sup>Required</sup> <a name="natIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIpAllocateOption"></a>

- *Type:* java.lang.String

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.router"></a>

- *Type:* java.lang.String

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#router ComputeRouterNat#router}

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.sourceSubnetworkIpRangesToNat"></a>

- *Type:* java.lang.String

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `drainNatIps`<sup>Optional</sup> <a name="drainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.drainNatIps"></a>

- *Type:* java.util.List<java.lang.String>

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}

---

##### `enableDynamicPortAllocation`<sup>Optional</sup> <a name="enableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableDynamicPortAllocation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enableEndpointIndependentMapping`<sup>Optional</sup> <a name="enableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableEndpointIndependentMapping"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `icmpIdleTimeoutSec`<sup>Optional</sup> <a name="icmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.icmpIdleTimeoutSec"></a>

- *Type:* java.lang.Number

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#log_config ComputeRouterNat#log_config}

---

##### `maxPortsPerVm`<sup>Optional</sup> <a name="maxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.maxPortsPerVm"></a>

- *Type:* java.lang.Number

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}

---

##### `minPortsPerVm`<sup>Optional</sup> <a name="minPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.minPortsPerVm"></a>

- *Type:* java.lang.Number

Minimum number of ports allocated to a VM from this NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}

---

##### `natIps`<sup>Optional</sup> <a name="natIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIps"></a>

- *Type:* java.util.List<java.lang.String>

Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#region ComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#rules ComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.subnetwork"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>>

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Optional</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpEstablishedIdleTimeoutSec"></a>

- *Type:* java.lang.Number

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcpTimeWaitTimeoutSec`<sup>Optional</sup> <a name="tcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTimeWaitTimeoutSec"></a>

- *Type:* java.lang.Number

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#tcp_time_wait_timeout_sec ComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Optional</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTransitoryIdleTimeoutSec"></a>

- *Type:* java.lang.Number

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#timeouts ComputeRouterNat#timeouts}

---

##### `udpIdleTimeoutSec`<sup>Optional</sup> <a name="udpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.udpIdleTimeoutSec"></a>

- *Type:* java.lang.Number

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork">putSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps">resetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation">resetEnableDynamicPortAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping">resetEnableEndpointIndependentMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec">resetIcmpIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm">resetMaxPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm">resetMinPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps">resetNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">resetTcpEstablishedIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec">resetTcpTimeWaitTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">resetTcpTransitoryIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec">resetUdpIdleTimeoutSec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig"></a>

```java
public void putLogConfig(ComputeRouterNatLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<ComputeRouterNatRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>>

---

##### `putSubnetwork` <a name="putSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork"></a>

```java
public void putSubnetwork(IResolvable OR java.util.List<ComputeRouterNatSubnetwork> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts"></a>

```java
public void putTimeouts(ComputeRouterNatTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

---

##### `resetDrainNatIps` <a name="resetDrainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps"></a>

```java
public void resetDrainNatIps()
```

##### `resetEnableDynamicPortAllocation` <a name="resetEnableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```java
public void resetEnableDynamicPortAllocation()
```

##### `resetEnableEndpointIndependentMapping` <a name="resetEnableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```java
public void resetEnableEndpointIndependentMapping()
```

##### `resetIcmpIdleTimeoutSec` <a name="resetIcmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```java
public void resetIcmpIdleTimeoutSec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId"></a>

```java
public void resetId()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetMaxPortsPerVm` <a name="resetMaxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm"></a>

```java
public void resetMaxPortsPerVm()
```

##### `resetMinPortsPerVm` <a name="resetMinPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm"></a>

```java
public void resetMinPortsPerVm()
```

##### `resetNatIps` <a name="resetNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps"></a>

```java
public void resetNatIps()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules"></a>

```java
public void resetRules()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTcpEstablishedIdleTimeoutSec` <a name="resetTcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```java
public void resetTcpEstablishedIdleTimeoutSec()
```

##### `resetTcpTimeWaitTimeoutSec` <a name="resetTcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```java
public void resetTcpTimeWaitTimeoutSec()
```

##### `resetTcpTransitoryIdleTimeoutSec` <a name="resetTcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```java
public void resetTcpTransitoryIdleTimeoutSec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUdpIdleTimeoutSec` <a name="resetUdpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```java
public void resetUdpIdleTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNat;

ComputeRouterNat.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNat;

ComputeRouterNat.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNat;

ComputeRouterNat.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork">subnetwork</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput">drainNatIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput">enableDynamicPortAllocationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput">enableEndpointIndependentMappingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput">icmpIdleTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput">maxPortsPerVmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput">minPortsPerVmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput">natIpAllocateOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput">natIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">sourceSubnetworkIpRangesToNatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput">subnetworkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">tcpEstablishedIdleTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">tcpTimeWaitTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">tcpTransitoryIdleTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput">udpIdleTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps">drainNatIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation">enableDynamicPortAllocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm">maxPortsPerVm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm">minPortsPerVm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption">natIpAllocateOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec">tcpTimeWaitTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig"></a>

```java
public ComputeRouterNatLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules"></a>

```java
public ComputeRouterNatRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a>

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork"></a>

```java
public ComputeRouterNatSubnetworkList getSubnetwork();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts"></a>

```java
public ComputeRouterNatTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a>

---

##### `drainNatIpsInput`<sup>Optional</sup> <a name="drainNatIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput"></a>

```java
public java.util.List<java.lang.String> getDrainNatIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableDynamicPortAllocationInput`<sup>Optional</sup> <a name="enableDynamicPortAllocationInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```java
public java.lang.Object getEnableDynamicPortAllocationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableEndpointIndependentMappingInput`<sup>Optional</sup> <a name="enableEndpointIndependentMappingInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```java
public java.lang.Object getEnableEndpointIndependentMappingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `icmpIdleTimeoutSecInput`<sup>Optional</sup> <a name="icmpIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```java
public java.lang.Number getIcmpIdleTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput"></a>

```java
public ComputeRouterNatLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---

##### `maxPortsPerVmInput`<sup>Optional</sup> <a name="maxPortsPerVmInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput"></a>

```java
public java.lang.Number getMaxPortsPerVmInput();
```

- *Type:* java.lang.Number

---

##### `minPortsPerVmInput`<sup>Optional</sup> <a name="minPortsPerVmInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput"></a>

```java
public java.lang.Number getMinPortsPerVmInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `natIpAllocateOptionInput`<sup>Optional</sup> <a name="natIpAllocateOptionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput"></a>

```java
public java.lang.String getNatIpAllocateOptionInput();
```

- *Type:* java.lang.String

---

##### `natIpsInput`<sup>Optional</sup> <a name="natIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput"></a>

```java
public java.util.List<java.lang.String> getNatIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>>

---

##### `sourceSubnetworkIpRangesToNatInput`<sup>Optional</sup> <a name="sourceSubnetworkIpRangesToNatInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```java
public java.lang.String getSourceSubnetworkIpRangesToNatInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput"></a>

```java
public java.lang.Object getSubnetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>>

---

##### `tcpEstablishedIdleTimeoutSecInput`<sup>Optional</sup> <a name="tcpEstablishedIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```java
public java.lang.Number getTcpEstablishedIdleTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `tcpTimeWaitTimeoutSecInput`<sup>Optional</sup> <a name="tcpTimeWaitTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```java
public java.lang.Number getTcpTimeWaitTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `tcpTransitoryIdleTimeoutSecInput`<sup>Optional</sup> <a name="tcpTransitoryIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```java
public java.lang.Number getTcpTransitoryIdleTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `udpIdleTimeoutSecInput`<sup>Optional</sup> <a name="udpIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```java
public java.lang.Number getUdpIdleTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `drainNatIps`<sup>Required</sup> <a name="drainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps"></a>

```java
public java.util.List<java.lang.String> getDrainNatIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableDynamicPortAllocation`<sup>Required</sup> <a name="enableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation"></a>

```java
public java.lang.Object getEnableDynamicPortAllocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableEndpointIndependentMapping`<sup>Required</sup> <a name="enableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```java
public java.lang.Object getEnableEndpointIndependentMapping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `icmpIdleTimeoutSec`<sup>Required</sup> <a name="icmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```java
public java.lang.Number getIcmpIdleTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxPortsPerVm`<sup>Required</sup> <a name="maxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm"></a>

```java
public java.lang.Number getMaxPortsPerVm();
```

- *Type:* java.lang.Number

---

##### `minPortsPerVm`<sup>Required</sup> <a name="minPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm"></a>

```java
public java.lang.Number getMinPortsPerVm();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `natIpAllocateOption`<sup>Required</sup> <a name="natIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption"></a>

```java
public java.lang.String getNatIpAllocateOption();
```

- *Type:* java.lang.String

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps"></a>

```java
public java.util.List<java.lang.String> getNatIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```java
public java.lang.String getSourceSubnetworkIpRangesToNat();
```

- *Type:* java.lang.String

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```java
public java.lang.Number getTcpEstablishedIdleTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `tcpTimeWaitTimeoutSec`<sup>Required</sup> <a name="tcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```java
public java.lang.Number getTcpTimeWaitTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```java
public java.lang.Number getTcpTransitoryIdleTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `udpIdleTimeoutSec`<sup>Required</sup> <a name="udpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec"></a>

```java
public java.lang.Number getUdpIdleTimeoutSec();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterNatConfig <a name="ComputeRouterNatConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatConfig;

ComputeRouterNatConfig.builder()
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
    .name(java.lang.String)
    .natIpAllocateOption(java.lang.String)
    .router(java.lang.String)
    .sourceSubnetworkIpRangesToNat(java.lang.String)
//  .drainNatIps(java.util.List<java.lang.String>)
//  .enableDynamicPortAllocation(java.lang.Boolean)
//  .enableDynamicPortAllocation(IResolvable)
//  .enableEndpointIndependentMapping(java.lang.Boolean)
//  .enableEndpointIndependentMapping(IResolvable)
//  .icmpIdleTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .logConfig(ComputeRouterNatLogConfig)
//  .maxPortsPerVm(java.lang.Number)
//  .minPortsPerVm(java.lang.Number)
//  .natIps(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<ComputeRouterNatRules>)
//  .subnetwork(IResolvable)
//  .subnetwork(java.util.List<ComputeRouterNatSubnetwork>)
//  .tcpEstablishedIdleTimeoutSec(java.lang.Number)
//  .tcpTimeWaitTimeoutSec(java.lang.Number)
//  .tcpTransitoryIdleTimeoutSec(java.lang.Number)
//  .timeouts(ComputeRouterNatTimeouts)
//  .udpIdleTimeoutSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption">natIpAllocateOption</a></code> | <code>java.lang.String</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>java.lang.String</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps">drainNatIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation">enableDynamicPortAllocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm">maxPortsPerVm</a></code> | <code>java.lang.Number</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm">minPortsPerVm</a></code> | <code>java.lang.Number</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork">subnetwork</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>></code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">tcpTimeWaitTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `natIpAllocateOption`<sup>Required</sup> <a name="natIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption"></a>

```java
public java.lang.String getNatIpAllocateOption();
```

- *Type:* java.lang.String

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#router ComputeRouterNat#router}

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```java
public java.lang.String getSourceSubnetworkIpRangesToNat();
```

- *Type:* java.lang.String

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `drainNatIps`<sup>Optional</sup> <a name="drainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps"></a>

```java
public java.util.List<java.lang.String> getDrainNatIps();
```

- *Type:* java.util.List<java.lang.String>

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}

---

##### `enableDynamicPortAllocation`<sup>Optional</sup> <a name="enableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```java
public java.lang.Object getEnableDynamicPortAllocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enableEndpointIndependentMapping`<sup>Optional</sup> <a name="enableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```java
public java.lang.Object getEnableEndpointIndependentMapping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `icmpIdleTimeoutSec`<sup>Optional</sup> <a name="icmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```java
public java.lang.Number getIcmpIdleTimeoutSec();
```

- *Type:* java.lang.Number

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig"></a>

```java
public ComputeRouterNatLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#log_config ComputeRouterNat#log_config}

---

##### `maxPortsPerVm`<sup>Optional</sup> <a name="maxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm"></a>

```java
public java.lang.Number getMaxPortsPerVm();
```

- *Type:* java.lang.Number

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}

---

##### `minPortsPerVm`<sup>Optional</sup> <a name="minPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm"></a>

```java
public java.lang.Number getMinPortsPerVm();
```

- *Type:* java.lang.Number

Minimum number of ports allocated to a VM from this NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}

---

##### `natIps`<sup>Optional</sup> <a name="natIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps"></a>

```java
public java.util.List<java.lang.String> getNatIps();
```

- *Type:* java.util.List<java.lang.String>

Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#region ComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#rules ComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork"></a>

```java
public java.lang.Object getSubnetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>>

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Optional</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```java
public java.lang.Number getTcpEstablishedIdleTimeoutSec();
```

- *Type:* java.lang.Number

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcpTimeWaitTimeoutSec`<sup>Optional</sup> <a name="tcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```java
public java.lang.Number getTcpTimeWaitTimeoutSec();
```

- *Type:* java.lang.Number

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#tcp_time_wait_timeout_sec ComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Optional</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```java
public java.lang.Number getTcpTransitoryIdleTimeoutSec();
```

- *Type:* java.lang.Number

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts"></a>

```java
public ComputeRouterNatTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#timeouts ComputeRouterNat#timeouts}

---

##### `udpIdleTimeoutSec`<sup>Optional</sup> <a name="udpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```java
public java.lang.Number getUdpIdleTimeoutSec();
```

- *Type:* java.lang.Number

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}

---

### ComputeRouterNatLogConfig <a name="ComputeRouterNatLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatLogConfig;

ComputeRouterNatLogConfig.builder()
    .enable(java.lang.Boolean)
    .enable(IResolvable)
    .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#enable ComputeRouterNat#enable}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#filter ComputeRouterNat#filter}

---

### ComputeRouterNatRules <a name="ComputeRouterNatRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatRules;

ComputeRouterNatRules.builder()
    .match(java.lang.String)
    .ruleNumber(java.lang.Number)
//  .action(ComputeRouterNatRulesAction)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match">match</a></code> | <code>java.lang.String</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber">ruleNumber</a></code> | <code>java.lang.Number</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this rule. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#match ComputeRouterNat#match}

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber"></a>

```java
public java.lang.Number getRuleNumber();
```

- *Type:* java.lang.Number

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#rule_number ComputeRouterNat#rule_number}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action"></a>

```java
public ComputeRouterNatRulesAction getAction();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#action ComputeRouterNat#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#description ComputeRouterNat#description}

---

### ComputeRouterNatRulesAction <a name="ComputeRouterNatRulesAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatRulesAction;

ComputeRouterNatRulesAction.builder()
//  .sourceNatActiveIps(java.util.List<java.lang.String>)
//  .sourceNatDrainIps(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps">sourceNatActiveIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps">sourceNatDrainIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of URLs of the IP resources to be drained. |

---

##### `sourceNatActiveIps`<sup>Optional</sup> <a name="sourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```java
public java.util.List<java.lang.String> getSourceNatActiveIps();
```

- *Type:* java.util.List<java.lang.String>

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#source_nat_active_ips ComputeRouterNat#source_nat_active_ips}

---

##### `sourceNatDrainIps`<sup>Optional</sup> <a name="sourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```java
public java.util.List<java.lang.String> getSourceNatDrainIps();
```

- *Type:* java.util.List<java.lang.String>

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#source_nat_drain_ips ComputeRouterNat#source_nat_drain_ips}

---

### ComputeRouterNatSubnetwork <a name="ComputeRouterNatSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatSubnetwork;

ComputeRouterNatSubnetwork.builder()
    .name(java.lang.String)
    .sourceIpRangesToNat(java.util.List<java.lang.String>)
//  .secondaryIpRangeNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name">name</a></code> | <code>java.lang.String</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat">sourceIpRangesToNat</a></code> | <code>java.util.List<java.lang.String></code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames">secondaryIpRangeNames</a></code> | <code>java.util.List<java.lang.String></code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `sourceIpRangesToNat`<sup>Required</sup> <a name="sourceIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```java
public java.util.List<java.lang.String> getSourceIpRangesToNat();
```

- *Type:* java.util.List<java.lang.String>

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#source_ip_ranges_to_nat ComputeRouterNat#source_ip_ranges_to_nat}

---

##### `secondaryIpRangeNames`<sup>Optional</sup> <a name="secondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```java
public java.util.List<java.lang.String> getSecondaryIpRangeNames();
```

- *Type:* java.util.List<java.lang.String>

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#secondary_ip_range_names ComputeRouterNat#secondary_ip_range_names}

---

### ComputeRouterNatTimeouts <a name="ComputeRouterNatTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatTimeouts;

ComputeRouterNatTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.68.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterNatLogConfigOutputReference <a name="ComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatLogConfigOutputReference;

new ComputeRouterNatLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```java
public ComputeRouterNatLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---


### ComputeRouterNatRulesActionOutputReference <a name="ComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatRulesActionOutputReference;

new ComputeRouterNatRulesActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">resetSourceNatActiveIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">resetSourceNatDrainIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceNatActiveIps` <a name="resetSourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```java
public void resetSourceNatActiveIps()
```

##### `resetSourceNatDrainIps` <a name="resetSourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```java
public void resetSourceNatDrainIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">sourceNatActiveIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">sourceNatDrainIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">sourceNatActiveIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">sourceNatDrainIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceNatActiveIpsInput`<sup>Optional</sup> <a name="sourceNatActiveIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```java
public java.util.List<java.lang.String> getSourceNatActiveIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceNatDrainIpsInput`<sup>Optional</sup> <a name="sourceNatDrainIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```java
public java.util.List<java.lang.String> getSourceNatDrainIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceNatActiveIps`<sup>Required</sup> <a name="sourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```java
public java.util.List<java.lang.String> getSourceNatActiveIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceNatDrainIps`<sup>Required</sup> <a name="sourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```java
public java.util.List<java.lang.String> getSourceNatDrainIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```java
public ComputeRouterNatRulesAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---


### ComputeRouterNatRulesList <a name="ComputeRouterNatRulesList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatRulesList;

new ComputeRouterNatRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get"></a>

```java
public ComputeRouterNatRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>>

---


### ComputeRouterNatRulesOutputReference <a name="ComputeRouterNatRulesOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatRulesOutputReference;

new ComputeRouterNatRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction"></a>

```java
public void putAction(ComputeRouterNatRulesAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput">matchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput">ruleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber">ruleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action"></a>

```java
public ComputeRouterNatRulesActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput"></a>

```java
public ComputeRouterNatRulesAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput"></a>

```java
public java.lang.String getMatchInput();
```

- *Type:* java.lang.String

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```java
public java.lang.Number getRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```java
public java.lang.Number getRuleNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a> OR com.hashicorp.cdktf.IResolvable

---


### ComputeRouterNatSubnetworkList <a name="ComputeRouterNatSubnetworkList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatSubnetworkList;

new ComputeRouterNatSubnetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get"></a>

```java
public ComputeRouterNatSubnetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>>

---


### ComputeRouterNatSubnetworkOutputReference <a name="ComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatSubnetworkOutputReference;

new ComputeRouterNatSubnetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">resetSecondaryIpRangeNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondaryIpRangeNames` <a name="resetSecondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```java
public void resetSecondaryIpRangeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">secondaryIpRangeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">sourceIpRangesToNatInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">secondaryIpRangeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">sourceIpRangesToNat</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secondaryIpRangeNamesInput`<sup>Optional</sup> <a name="secondaryIpRangeNamesInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```java
public java.util.List<java.lang.String> getSecondaryIpRangeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpRangesToNatInput`<sup>Optional</sup> <a name="sourceIpRangesToNatInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpRangesToNatInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secondaryIpRangeNames`<sup>Required</sup> <a name="secondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```java
public java.util.List<java.lang.String> getSecondaryIpRangeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceIpRangesToNat`<sup>Required</sup> <a name="sourceIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```java
public java.util.List<java.lang.String> getSourceIpRangesToNat();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a> OR com.hashicorp.cdktf.IResolvable

---


### ComputeRouterNatTimeoutsOutputReference <a name="ComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_nat.ComputeRouterNatTimeoutsOutputReference;

new ComputeRouterNatTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



