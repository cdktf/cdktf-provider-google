# `google_compute_vpn_tunnel`

Refer to the Terraform Registory for docs: [`google_compute_vpn_tunnel`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel).

# `computeVpnTunnel` Submodule <a name="`computeVpnTunnel` Submodule" id="@cdktf/provider-google.computeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnTunnel <a name="ComputeVpnTunnel" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.Builder.create(Construct scope, java.lang.String id)
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
    .sharedSecret(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ikeVersion(java.lang.Number)
//  .localTrafficSelector(java.util.List<java.lang.String>)
//  .peerExternalGateway(java.lang.String)
//  .peerExternalGatewayInterface(java.lang.Number)
//  .peerGcpGateway(java.lang.String)
//  .peerIp(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .remoteTrafficSelector(java.util.List<java.lang.String>)
//  .router(java.lang.String)
//  .targetVpnGateway(java.lang.String)
//  .timeouts(ComputeVpnTunnelTimeouts)
//  .vpnGateway(java.lang.String)
//  .vpnGatewayInterface(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerIp">peerIp</a></code> | <code>java.lang.String</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecret"></a>

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.ikeVersion"></a>

- *Type:* java.lang.Number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.localTrafficSelector"></a>

- *Type:* java.util.List<java.lang.String>

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGateway"></a>

- *Type:* java.lang.String

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface"></a>

- *Type:* java.lang.Number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerGcpGateway"></a>

- *Type:* java.lang.String

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerIp"></a>

- *Type:* java.lang.String

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector"></a>

- *Type:* java.util.List<java.lang.String>

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.router"></a>

- *Type:* java.lang.String

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.targetVpnGateway"></a>

- *Type:* java.lang.String

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGateway"></a>

- *Type:* java.lang.String

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface"></a>

- *Type:* java.lang.Number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector">resetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway">resetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface">resetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway">resetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp">resetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector">resetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway">resetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway">resetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface">resetVpnGatewayInterface</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts"></a>

```java
public void putTimeouts(ComputeVpnTunnelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId"></a>

```java
public void resetId()
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion"></a>

```java
public void resetIkeVersion()
```

##### `resetLocalTrafficSelector` <a name="resetLocalTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector"></a>

```java
public void resetLocalTrafficSelector()
```

##### `resetPeerExternalGateway` <a name="resetPeerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway"></a>

```java
public void resetPeerExternalGateway()
```

##### `resetPeerExternalGatewayInterface` <a name="resetPeerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```java
public void resetPeerExternalGatewayInterface()
```

##### `resetPeerGcpGateway` <a name="resetPeerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway"></a>

```java
public void resetPeerGcpGateway()
```

##### `resetPeerIp` <a name="resetPeerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp"></a>

```java
public void resetPeerIp()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRemoteTrafficSelector` <a name="resetRemoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```java
public void resetRemoteTrafficSelector()
```

##### `resetRouter` <a name="resetRouter" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter"></a>

```java
public void resetRouter()
```

##### `resetTargetVpnGateway` <a name="resetTargetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway"></a>

```java
public void resetTargetVpnGateway()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnGateway` <a name="resetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway"></a>

```java
public void resetVpnGateway()
```

##### `resetVpnGatewayInterface` <a name="resetVpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface"></a>

```java
public void resetVpnGatewayInterface()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus">detailedStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash">sharedSecretHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput">ikeVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput">localTrafficSelectorInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput">peerExternalGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peerExternalGatewayInterfaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput">peerGcpGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput">peerIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput">remoteTrafficSelectorInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput">sharedSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput">targetVpnGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput">vpnGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpnGatewayInterfaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `detailedStatus`<sup>Required</sup> <a name="detailedStatus" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus"></a>

```java
public java.lang.String getDetailedStatus();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sharedSecretHash`<sup>Required</sup> <a name="sharedSecretHash" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash"></a>

```java
public java.lang.String getSharedSecretHash();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts"></a>

```java
public ComputeVpnTunnelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput"></a>

```java
public java.lang.Number getIkeVersionInput();
```

- *Type:* java.lang.Number

---

##### `localTrafficSelectorInput`<sup>Optional</sup> <a name="localTrafficSelectorInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelectorInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInput`<sup>Optional</sup> <a name="peerExternalGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```java
public java.lang.String getPeerExternalGatewayInput();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="peerExternalGatewayInterfaceInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```java
public java.lang.Number getPeerExternalGatewayInterfaceInput();
```

- *Type:* java.lang.Number

---

##### `peerGcpGatewayInput`<sup>Optional</sup> <a name="peerGcpGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```java
public java.lang.String getPeerGcpGatewayInput();
```

- *Type:* java.lang.String

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput"></a>

```java
public java.lang.String getPeerIpInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `remoteTrafficSelectorInput`<sup>Optional</sup> <a name="remoteTrafficSelectorInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelectorInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput"></a>

```java
public java.lang.String getSharedSecretInput();
```

- *Type:* java.lang.String

---

##### `targetVpnGatewayInput`<sup>Optional</sup> <a name="targetVpnGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```java
public java.lang.String getTargetVpnGatewayInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `vpnGatewayInput`<sup>Optional</sup> <a name="vpnGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput"></a>

```java
public java.lang.String getVpnGatewayInput();
```

- *Type:* java.lang.String

---

##### `vpnGatewayInterfaceInput`<sup>Optional</sup> <a name="vpnGatewayInterfaceInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```java
public java.lang.Number getVpnGatewayInterfaceInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion"></a>

```java
public java.lang.Number getIkeVersion();
```

- *Type:* java.lang.Number

---

##### `localTrafficSelector`<sup>Required</sup> <a name="localTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerExternalGateway`<sup>Required</sup> <a name="peerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway"></a>

```java
public java.lang.String getPeerExternalGateway();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInterface`<sup>Required</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```java
public java.lang.Number getPeerExternalGatewayInterface();
```

- *Type:* java.lang.Number

---

##### `peerGcpGateway`<sup>Required</sup> <a name="peerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway"></a>

```java
public java.lang.String getPeerGcpGateway();
```

- *Type:* java.lang.String

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `remoteTrafficSelector`<sup>Required</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

---

##### `targetVpnGateway`<sup>Required</sup> <a name="targetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway"></a>

```java
public java.lang.String getTargetVpnGateway();
```

- *Type:* java.lang.String

---

##### `vpnGateway`<sup>Required</sup> <a name="vpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway"></a>

```java
public java.lang.String getVpnGateway();
```

- *Type:* java.lang.String

---

##### `vpnGatewayInterface`<sup>Required</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface"></a>

```java
public java.lang.Number getVpnGatewayInterface();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnTunnelConfig <a name="ComputeVpnTunnelConfig" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_vpn_tunnel.ComputeVpnTunnelConfig;

ComputeVpnTunnelConfig.builder()
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
    .sharedSecret(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ikeVersion(java.lang.Number)
//  .localTrafficSelector(java.util.List<java.lang.String>)
//  .peerExternalGateway(java.lang.String)
//  .peerExternalGatewayInterface(java.lang.Number)
//  .peerGcpGateway(java.lang.String)
//  .peerIp(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .remoteTrafficSelector(java.util.List<java.lang.String>)
//  .router(java.lang.String)
//  .targetVpnGateway(java.lang.String)
//  .timeouts(ComputeVpnTunnelTimeouts)
//  .vpnGateway(java.lang.String)
//  .vpnGatewayInterface(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router">router</a></code> | <code>java.lang.String</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion"></a>

```java
public java.lang.Number getIkeVersion();
```

- *Type:* java.lang.Number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```java
public java.lang.String getPeerExternalGateway();
```

- *Type:* java.lang.String

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```java
public java.lang.Number getPeerExternalGatewayInterface();
```

- *Type:* java.lang.Number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```java
public java.lang.String getPeerGcpGateway();
```

- *Type:* java.lang.String

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```java
public java.lang.String getTargetVpnGateway();
```

- *Type:* java.lang.String

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts"></a>

```java
public ComputeVpnTunnelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway"></a>

```java
public java.lang.String getVpnGateway();
```

- *Type:* java.lang.String

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```java
public java.lang.Number getVpnGatewayInterface();
```

- *Type:* java.lang.Number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

### ComputeVpnTunnelTimeouts <a name="ComputeVpnTunnelTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_vpn_tunnel.ComputeVpnTunnelTimeouts;

ComputeVpnTunnelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnTunnelTimeoutsOutputReference <a name="ComputeVpnTunnelTimeoutsOutputReference" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_vpn_tunnel.ComputeVpnTunnelTimeoutsOutputReference;

new ComputeVpnTunnelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---



