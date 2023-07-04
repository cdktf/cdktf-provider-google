# `google_compute_router_nat`

Refer to the Terraform Registory for docs: [`google_compute_router_nat`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat).

# `computeRouterNat` Submodule <a name="`computeRouterNat` Submodule" id="@cdktf/provider-google.computeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterNat <a name="ComputeRouterNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNat(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  nat_ip_allocate_option: str,
  router: str,
  source_subnetwork_ip_ranges_to_nat: str,
  drain_nat_ips: typing.List[str] = None,
  enable_dynamic_port_allocation: typing.Union[bool, IResolvable] = None,
  enable_endpoint_independent_mapping: typing.Union[bool, IResolvable] = None,
  icmp_idle_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  log_config: ComputeRouterNatLogConfig = None,
  max_ports_per_vm: typing.Union[int, float] = None,
  min_ports_per_vm: typing.Union[int, float] = None,
  nat_ips: typing.List[str] = None,
  project: str = None,
  region: str = None,
  rules: typing.Union[IResolvable, typing.List[ComputeRouterNatRules]] = None,
  subnetwork: typing.Union[IResolvable, typing.List[ComputeRouterNatSubnetwork]] = None,
  tcp_established_idle_timeout_sec: typing.Union[int, float] = None,
  tcp_time_wait_timeout_sec: typing.Union[int, float] = None,
  tcp_transitory_idle_timeout_sec: typing.Union[int, float] = None,
  timeouts: ComputeRouterNatTimeouts = None,
  udp_idle_timeout_sec: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIpAllocateOption">nat_ip_allocate_option</a></code> | <code>str</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.sourceSubnetworkIpRangesToNat">source_subnetwork_ip_ranges_to_nat</a></code> | <code>str</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.drainNatIps">drain_nat_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableDynamicPortAllocation">enable_dynamic_port_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableEndpointIndependentMapping">enable_endpoint_independent_mapping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.icmpIdleTimeoutSec">icmp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.maxPortsPerVm">max_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.minPortsPerVm">min_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpEstablishedIdleTimeoutSec">tcp_established_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTimeWaitTimeoutSec">tcp_time_wait_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTransitoryIdleTimeoutSec">tcp_transitory_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.udpIdleTimeoutSec">udp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.name"></a>

- *Type:* str

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `nat_ip_allocate_option`<sup>Required</sup> <a name="nat_ip_allocate_option" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIpAllocateOption"></a>

- *Type:* str

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.router"></a>

- *Type:* str

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#router ComputeRouterNat#router}

---

##### `source_subnetwork_ip_ranges_to_nat`<sup>Required</sup> <a name="source_subnetwork_ip_ranges_to_nat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.sourceSubnetworkIpRangesToNat"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `drain_nat_ips`<sup>Optional</sup> <a name="drain_nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.drainNatIps"></a>

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}

---

##### `enable_dynamic_port_allocation`<sup>Optional</sup> <a name="enable_dynamic_port_allocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableDynamicPortAllocation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enable_endpoint_independent_mapping`<sup>Optional</sup> <a name="enable_endpoint_independent_mapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.enableEndpointIndependentMapping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `icmp_idle_timeout_sec`<sup>Optional</sup> <a name="icmp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.icmpIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#log_config ComputeRouterNat#log_config}

---

##### `max_ports_per_vm`<sup>Optional</sup> <a name="max_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.maxPortsPerVm"></a>

- *Type:* typing.Union[int, float]

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}

---

##### `min_ports_per_vm`<sup>Optional</sup> <a name="min_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.minPortsPerVm"></a>

- *Type:* typing.Union[int, float]

Minimum number of ports allocated to a VM from this NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}

---

##### `nat_ips`<sup>Optional</sup> <a name="nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.natIps"></a>

- *Type:* typing.List[str]

Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.region"></a>

- *Type:* str

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#region ComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#rules ComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.subnetwork"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}

---

##### `tcp_established_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_established_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpEstablishedIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcp_time_wait_timeout_sec`<sup>Optional</sup> <a name="tcp_time_wait_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTimeWaitTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#tcp_time_wait_timeout_sec ComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcp_transitory_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.tcpTransitoryIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#timeouts ComputeRouterNat#timeouts}

---

##### `udp_idle_timeout_sec`<sup>Optional</sup> <a name="udp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.udpIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork">put_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps">reset_drain_nat_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation">reset_enable_dynamic_port_allocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping">reset_enable_endpoint_independent_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec">reset_icmp_idle_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm">reset_max_ports_per_vm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm">reset_min_ports_per_vm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps">reset_nat_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">reset_tcp_established_idle_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec">reset_tcp_time_wait_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">reset_tcp_transitory_idle_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec">reset_udp_idle_timeout_sec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig"></a>

```python
def put_log_config(
  enable: typing.Union[bool, IResolvable],
  filter: str
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#enable ComputeRouterNat#enable}

---

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig.parameter.filter"></a>

- *Type:* str

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#filter ComputeRouterNat#filter}

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[ComputeRouterNatRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]

---

##### `put_subnetwork` <a name="put_subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork"></a>

```python
def put_subnetwork(
  value: typing.Union[IResolvable, typing.List[ComputeRouterNatSubnetwork]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}.

---

##### `reset_drain_nat_ips` <a name="reset_drain_nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps"></a>

```python
def reset_drain_nat_ips() -> None
```

##### `reset_enable_dynamic_port_allocation` <a name="reset_enable_dynamic_port_allocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```python
def reset_enable_dynamic_port_allocation() -> None
```

##### `reset_enable_endpoint_independent_mapping` <a name="reset_enable_endpoint_independent_mapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```python
def reset_enable_endpoint_independent_mapping() -> None
```

##### `reset_icmp_idle_timeout_sec` <a name="reset_icmp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```python
def reset_icmp_idle_timeout_sec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_max_ports_per_vm` <a name="reset_max_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm"></a>

```python
def reset_max_ports_per_vm() -> None
```

##### `reset_min_ports_per_vm` <a name="reset_min_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm"></a>

```python
def reset_min_ports_per_vm() -> None
```

##### `reset_nat_ips` <a name="reset_nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps"></a>

```python
def reset_nat_ips() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_tcp_established_idle_timeout_sec` <a name="reset_tcp_established_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```python
def reset_tcp_established_idle_timeout_sec() -> None
```

##### `reset_tcp_time_wait_timeout_sec` <a name="reset_tcp_time_wait_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```python
def reset_tcp_time_wait_timeout_sec() -> None
```

##### `reset_tcp_transitory_idle_timeout_sec` <a name="reset_tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```python
def reset_tcp_transitory_idle_timeout_sec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_udp_idle_timeout_sec` <a name="reset_udp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```python
def reset_udp_idle_timeout_sec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNat.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNat.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNat.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork">subnetwork</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput">drain_nat_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput">enable_dynamic_port_allocation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput">enable_endpoint_independent_mapping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput">icmp_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput">max_ports_per_vm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput">min_ports_per_vm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput">nat_ip_allocate_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput">nat_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">source_subnetwork_ip_ranges_to_nat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput">subnetwork_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">tcp_established_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">tcp_time_wait_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">tcp_transitory_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput">udp_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps">drain_nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation">enable_dynamic_port_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping">enable_endpoint_independent_mapping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec">icmp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm">max_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm">min_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption">nat_ip_allocate_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat">source_subnetwork_ip_ranges_to_nat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">tcp_established_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec">tcp_time_wait_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">tcp_transitory_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec">udp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig"></a>

```python
log_config: ComputeRouterNatLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules"></a>

```python
rules: ComputeRouterNatRulesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a>

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork"></a>

```python
subnetwork: ComputeRouterNatSubnetworkList
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts"></a>

```python
timeouts: ComputeRouterNatTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a>

---

##### `drain_nat_ips_input`<sup>Optional</sup> <a name="drain_nat_ips_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput"></a>

```python
drain_nat_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_dynamic_port_allocation_input`<sup>Optional</sup> <a name="enable_dynamic_port_allocation_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```python
enable_dynamic_port_allocation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_endpoint_independent_mapping_input`<sup>Optional</sup> <a name="enable_endpoint_independent_mapping_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```python
enable_endpoint_independent_mapping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `icmp_idle_timeout_sec_input`<sup>Optional</sup> <a name="icmp_idle_timeout_sec_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```python
icmp_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput"></a>

```python
log_config_input: ComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---

##### `max_ports_per_vm_input`<sup>Optional</sup> <a name="max_ports_per_vm_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput"></a>

```python
max_ports_per_vm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ports_per_vm_input`<sup>Optional</sup> <a name="min_ports_per_vm_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput"></a>

```python
min_ports_per_vm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nat_ip_allocate_option_input`<sup>Optional</sup> <a name="nat_ip_allocate_option_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput"></a>

```python
nat_ip_allocate_option_input: str
```

- *Type:* str

---

##### `nat_ips_input`<sup>Optional</sup> <a name="nat_ips_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput"></a>

```python
nat_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[ComputeRouterNatRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]

---

##### `source_subnetwork_ip_ranges_to_nat_input`<sup>Optional</sup> <a name="source_subnetwork_ip_ranges_to_nat_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```python
source_subnetwork_ip_ranges_to_nat_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput"></a>

```python
subnetwork_input: typing.Union[IResolvable, typing.List[ComputeRouterNatSubnetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]

---

##### `tcp_established_idle_timeout_sec_input`<sup>Optional</sup> <a name="tcp_established_idle_timeout_sec_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```python
tcp_established_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_time_wait_timeout_sec_input`<sup>Optional</sup> <a name="tcp_time_wait_timeout_sec_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```python
tcp_time_wait_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_transitory_idle_timeout_sec_input`<sup>Optional</sup> <a name="tcp_transitory_idle_timeout_sec_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```python
tcp_transitory_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRouterNatTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>]

---

##### `udp_idle_timeout_sec_input`<sup>Optional</sup> <a name="udp_idle_timeout_sec_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```python
udp_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drain_nat_ips`<sup>Required</sup> <a name="drain_nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps"></a>

```python
drain_nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_dynamic_port_allocation`<sup>Required</sup> <a name="enable_dynamic_port_allocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation"></a>

```python
enable_dynamic_port_allocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_endpoint_independent_mapping`<sup>Required</sup> <a name="enable_endpoint_independent_mapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```python
enable_endpoint_independent_mapping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `icmp_idle_timeout_sec`<sup>Required</sup> <a name="icmp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```python
icmp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ports_per_vm`<sup>Required</sup> <a name="max_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm"></a>

```python
max_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ports_per_vm`<sup>Required</sup> <a name="min_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm"></a>

```python
min_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nat_ip_allocate_option`<sup>Required</sup> <a name="nat_ip_allocate_option" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption"></a>

```python
nat_ip_allocate_option: str
```

- *Type:* str

---

##### `nat_ips`<sup>Required</sup> <a name="nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps"></a>

```python
nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `source_subnetwork_ip_ranges_to_nat`<sup>Required</sup> <a name="source_subnetwork_ip_ranges_to_nat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```python
source_subnetwork_ip_ranges_to_nat: str
```

- *Type:* str

---

##### `tcp_established_idle_timeout_sec`<sup>Required</sup> <a name="tcp_established_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```python
tcp_established_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_time_wait_timeout_sec`<sup>Required</sup> <a name="tcp_time_wait_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```python
tcp_time_wait_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_transitory_idle_timeout_sec`<sup>Required</sup> <a name="tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```python
tcp_transitory_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_idle_timeout_sec`<sup>Required</sup> <a name="udp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec"></a>

```python
udp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterNatConfig <a name="ComputeRouterNatConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  nat_ip_allocate_option: str,
  router: str,
  source_subnetwork_ip_ranges_to_nat: str,
  drain_nat_ips: typing.List[str] = None,
  enable_dynamic_port_allocation: typing.Union[bool, IResolvable] = None,
  enable_endpoint_independent_mapping: typing.Union[bool, IResolvable] = None,
  icmp_idle_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  log_config: ComputeRouterNatLogConfig = None,
  max_ports_per_vm: typing.Union[int, float] = None,
  min_ports_per_vm: typing.Union[int, float] = None,
  nat_ips: typing.List[str] = None,
  project: str = None,
  region: str = None,
  rules: typing.Union[IResolvable, typing.List[ComputeRouterNatRules]] = None,
  subnetwork: typing.Union[IResolvable, typing.List[ComputeRouterNatSubnetwork]] = None,
  tcp_established_idle_timeout_sec: typing.Union[int, float] = None,
  tcp_time_wait_timeout_sec: typing.Union[int, float] = None,
  tcp_transitory_idle_timeout_sec: typing.Union[int, float] = None,
  timeouts: ComputeRouterNatTimeouts = None,
  udp_idle_timeout_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name">name</a></code> | <code>str</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption">nat_ip_allocate_option</a></code> | <code>str</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">source_subnetwork_ip_ranges_to_nat</a></code> | <code>str</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps">drain_nat_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation">enable_dynamic_port_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping">enable_endpoint_independent_mapping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec">icmp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm">max_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm">min_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region">region</a></code> | <code>str</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork">subnetwork</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">tcp_established_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">tcp_time_wait_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">tcp_transitory_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec">udp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `nat_ip_allocate_option`<sup>Required</sup> <a name="nat_ip_allocate_option" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption"></a>

```python
nat_ip_allocate_option: str
```

- *Type:* str

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router"></a>

```python
router: str
```

- *Type:* str

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#router ComputeRouterNat#router}

---

##### `source_subnetwork_ip_ranges_to_nat`<sup>Required</sup> <a name="source_subnetwork_ip_ranges_to_nat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```python
source_subnetwork_ip_ranges_to_nat: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `drain_nat_ips`<sup>Optional</sup> <a name="drain_nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps"></a>

```python
drain_nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}

---

##### `enable_dynamic_port_allocation`<sup>Optional</sup> <a name="enable_dynamic_port_allocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```python
enable_dynamic_port_allocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enable_endpoint_independent_mapping`<sup>Optional</sup> <a name="enable_endpoint_independent_mapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```python
enable_endpoint_independent_mapping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `icmp_idle_timeout_sec`<sup>Optional</sup> <a name="icmp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```python
icmp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig"></a>

```python
log_config: ComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#log_config ComputeRouterNat#log_config}

---

##### `max_ports_per_vm`<sup>Optional</sup> <a name="max_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm"></a>

```python
max_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}

---

##### `min_ports_per_vm`<sup>Optional</sup> <a name="min_ports_per_vm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm"></a>

```python
min_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of ports allocated to a VM from this NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}

---

##### `nat_ips`<sup>Optional</sup> <a name="nat_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps"></a>

```python
nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#region ComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[ComputeRouterNatRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#rules ComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork"></a>

```python
subnetwork: typing.Union[IResolvable, typing.List[ComputeRouterNatSubnetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}

---

##### `tcp_established_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_established_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```python
tcp_established_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcp_time_wait_timeout_sec`<sup>Optional</sup> <a name="tcp_time_wait_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```python
tcp_time_wait_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#tcp_time_wait_timeout_sec ComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcp_transitory_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```python
tcp_transitory_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts"></a>

```python
timeouts: ComputeRouterNatTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#timeouts ComputeRouterNat#timeouts}

---

##### `udp_idle_timeout_sec`<sup>Optional</sup> <a name="udp_idle_timeout_sec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```python
udp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}

---

### ComputeRouterNatLogConfig <a name="ComputeRouterNatLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatLogConfig(
  enable: typing.Union[bool, IResolvable],
  filter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter">filter</a></code> | <code>str</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#enable ComputeRouterNat#enable}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#filter ComputeRouterNat#filter}

---

### ComputeRouterNatRules <a name="ComputeRouterNatRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatRules(
  match: str,
  rule_number: typing.Union[int, float],
  action: ComputeRouterNatRulesAction = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match">match</a></code> | <code>str</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description">description</a></code> | <code>str</code> | An optional description of this rule. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match"></a>

```python
match: str
```

- *Type:* str

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#match ComputeRouterNat#match}

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#rule_number ComputeRouterNat#rule_number}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action"></a>

```python
action: ComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#action ComputeRouterNat#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#description ComputeRouterNat#description}

---

### ComputeRouterNatRulesAction <a name="ComputeRouterNatRulesAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatRulesAction(
  source_nat_active_ips: typing.List[str] = None,
  source_nat_drain_ips: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps">source_nat_active_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps">source_nat_drain_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources to be drained. |

---

##### `source_nat_active_ips`<sup>Optional</sup> <a name="source_nat_active_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```python
source_nat_active_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#source_nat_active_ips ComputeRouterNat#source_nat_active_ips}

---

##### `source_nat_drain_ips`<sup>Optional</sup> <a name="source_nat_drain_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```python
source_nat_drain_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#source_nat_drain_ips ComputeRouterNat#source_nat_drain_ips}

---

### ComputeRouterNatSubnetwork <a name="ComputeRouterNatSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatSubnetwork(
  name: str,
  source_ip_ranges_to_nat: typing.List[str],
  secondary_ip_range_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name">name</a></code> | <code>str</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat">source_ip_ranges_to_nat</a></code> | <code>typing.List[str]</code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames">secondary_ip_range_names</a></code> | <code>typing.List[str]</code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name"></a>

```python
name: str
```

- *Type:* str

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `source_ip_ranges_to_nat`<sup>Required</sup> <a name="source_ip_ranges_to_nat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```python
source_ip_ranges_to_nat: typing.List[str]
```

- *Type:* typing.List[str]

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#source_ip_ranges_to_nat ComputeRouterNat#source_ip_ranges_to_nat}

---

##### `secondary_ip_range_names`<sup>Optional</sup> <a name="secondary_ip_range_names" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```python
secondary_ip_range_names: typing.List[str]
```

- *Type:* typing.List[str]

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#secondary_ip_range_names ComputeRouterNat#secondary_ip_range_names}

---

### ComputeRouterNatTimeouts <a name="ComputeRouterNatTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterNatLogConfigOutputReference <a name="ComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---


### ComputeRouterNatRulesActionOutputReference <a name="ComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">reset_source_nat_active_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">reset_source_nat_drain_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_nat_active_ips` <a name="reset_source_nat_active_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```python
def reset_source_nat_active_ips() -> None
```

##### `reset_source_nat_drain_ips` <a name="reset_source_nat_drain_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```python
def reset_source_nat_drain_ips() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">source_nat_active_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">source_nat_drain_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">source_nat_active_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">source_nat_drain_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_nat_active_ips_input`<sup>Optional</sup> <a name="source_nat_active_ips_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```python
source_nat_active_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_drain_ips_input`<sup>Optional</sup> <a name="source_nat_drain_ips_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```python
source_nat_drain_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_active_ips`<sup>Required</sup> <a name="source_nat_active_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```python
source_nat_active_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_drain_ips`<sup>Required</sup> <a name="source_nat_drain_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```python
source_nat_drain_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---


### ComputeRouterNatRulesList <a name="ComputeRouterNatRulesList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRouterNatRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRouterNatRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]]

---


### ComputeRouterNatRulesOutputReference <a name="ComputeRouterNatRulesOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction"></a>

```python
def put_action(
  source_nat_active_ips: typing.List[str] = None,
  source_nat_drain_ips: typing.List[str] = None
) -> None
```

###### `source_nat_active_ips`<sup>Optional</sup> <a name="source_nat_active_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction.parameter.sourceNatActiveIps"></a>

- *Type:* typing.List[str]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#source_nat_active_ips ComputeRouterNat#source_nat_active_ips}

---

###### `source_nat_drain_ips`<sup>Optional</sup> <a name="source_nat_drain_ips" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction.parameter.sourceNatDrainIps"></a>

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_router_nat#source_nat_drain_ips ComputeRouterNat#source_nat_drain_ips}

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput">rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action"></a>

```python
action: ComputeRouterNatRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput"></a>

```python
action_input: ComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `rule_number_input`<sup>Optional</sup> <a name="rule_number_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```python
rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRouterNatRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>]

---


### ComputeRouterNatSubnetworkList <a name="ComputeRouterNatSubnetworkList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatSubnetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRouterNatSubnetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRouterNatSubnetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]]

---


### ComputeRouterNatSubnetworkOutputReference <a name="ComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatSubnetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">reset_secondary_ip_range_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secondary_ip_range_names` <a name="reset_secondary_ip_range_names" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```python
def reset_secondary_ip_range_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">secondary_ip_range_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">source_ip_ranges_to_nat_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">secondary_ip_range_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">source_ip_ranges_to_nat</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secondary_ip_range_names_input`<sup>Optional</sup> <a name="secondary_ip_range_names_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```python
secondary_ip_range_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_ranges_to_nat_input`<sup>Optional</sup> <a name="source_ip_ranges_to_nat_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```python
source_ip_ranges_to_nat_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secondary_ip_range_names`<sup>Required</sup> <a name="secondary_ip_range_names" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```python
secondary_ip_range_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_ranges_to_nat`<sup>Required</sup> <a name="source_ip_ranges_to_nat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```python
source_ip_ranges_to_nat: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRouterNatSubnetwork]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>]

---


### ComputeRouterNatTimeoutsOutputReference <a name="ComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_router_nat

computeRouterNat.ComputeRouterNatTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRouterNatTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>]

---



